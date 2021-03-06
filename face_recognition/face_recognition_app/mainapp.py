

import cv2
import math
from sklearn import neighbors
import os
import os.path
import pickle
from PIL import Image, ImageDraw
import face_recognition
from face_recognition.face_recognition_cli import image_files_in_folder
from DailyRecordModel import DailyRecordModel
from DailyRecord import DailyRecord
from DateTime import DateTime
import os
from Settings import Settings
import time


def train(train_dir, model_save_path=None, n_neighbors=None, knn_algo='ball_tree', verbose=True):

    X = []
    y = []

    # Loop through each person in the training set
    print ("Start training...")
    for class_dir in os.listdir(train_dir):
        print (class_dir)
        if not os.path.isdir(os.path.join(train_dir, class_dir)):
            continue

        # Loop through each training image for the current person
        for img_path in image_files_in_folder(os.path.join(train_dir, class_dir)):
            image = face_recognition.load_image_file(img_path)
            face_bounding_boxes = face_recognition.face_locations(image,1,"hog")
            

            if len(face_bounding_boxes) != 1:
                # If there are no people (or too many people) in a training image, skip the image.
                if verbose:
                    print("Image {} not suitable for training: {}".format(img_path, "Didn't find a face" if len(face_bounding_boxes) < 1 else "Found more than one face"))
            else:
                # Add face encoding for current image to the training set
                X.append(face_recognition.face_encodings(image, known_face_locations=face_bounding_boxes)[0])
                y.append(class_dir)

    if n_neighbors is None:
        n_neighbors = int(round(math.sqrt(len(X))))
        if verbose:
            print("Chose n_neighbors automatically:", n_neighbors)

    # Create and train the KNN classifier
    knn_clf = neighbors.KNeighborsClassifier(n_neighbors=n_neighbors, algorithm=knn_algo, weights='distance',n_jobs=1)
    knn_clf.fit(X, y)

    # Save the trained KNN classifier
    if model_save_path is not None:
        with open(model_save_path, 'wb') as f:
            pickle.dump(knn_clf, f)

    return knn_clf


def predict(X_img, knn_clf=None, model_path=None, distance_threshold=0.4):
   
    if knn_clf is None and model_path is None:
        raise Exception("Must supply knn classifier either thourgh knn_clf or model_path")

    # Load a trained KNN model (if one was passed in)
    if knn_clf is None:
        with open(model_path, 'rb') as f:
            knn_clf = pickle.load(f)

    # Load image file and find face locations
    X_face_locations = face_recognition.face_locations(X_img,1,"hog")

    # If no faces are found in the image, return an empty result.
    if len(X_face_locations) == 0:
        return []

    faces_encodings = face_recognition.face_encodings(X_img, known_face_locations=X_face_locations)


    closest_distances = knn_clf.kneighbors(faces_encodings, n_neighbors=3)

    are_matches = [closest_distances[0][i][0] <= distance_threshold for i in range(len(X_face_locations))]

    # Predict classes and remove classifications that aren't within the threshold
    return [(pred, loc) if rec else ("unknown", loc) for pred, loc, rec in zip(knn_clf.predict(faces_encodings), X_face_locations, are_matches)]

settings = Settings()
datetime = DateTime()
def main():
    # STEP 1: Train the KNN classifier and save it to disk
    # Once the model is trained and saved, you can skip this step next time.
    global frame_container
    video_capture = cv2.VideoCapture(0)
    daily = DailyRecordModel(datetime.getDate())
    

    while True:
          # Grab a single frame of video
        ret, frame = video_capture.read()

        # Resize frame of video to 1/4 size for faster face recognition processing
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

        # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
        rgb_small_frame = small_frame[:, :, ::-1]

        predictions = predict(rgb_small_frame, model_path="trained_knn_model.clf",distance_threshold=0.4)

        # Print results on the console
        for name, (top, right, bottom, left) in predictions:

        #    s = daily.getRecordByStudentId(name);

            if name not in daily.getAllRegs():

                r = DailyRecord(name,datetime.getTime(),datetime.getTime(),True)
                roi = frame[top*4:bottom*4, left*4:right*4]
                cv2.imwrite("log_images/{}_{}.jpg".format(name,datetime.getDate()), roi)
                daily.insertRecord(r)
           # else:
            #    roi = frame[top*4:bottom*4, left*4:right*4]
             #   cv2.imwrite("log_images/{}_{}.jpg".format(name,datetime.getDate()), roi)
              #  r = DailyRecord(name,datetime.getTime(),datetime.getTime(),True)
               # daily.updateRecord(r)
                
            print("- Found {} at ({}, {})".format(name, left, top))
            top *= 4
            right *= 4
            bottom *= 4
            left *= 4

            # Draw a box around the face
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

            # Draw a label with a name below the face
            cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255))
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
            # Display results overlaid on an image
        cv2.imshow("App",frame)
        ret, jpeg = cv2.imencode('.jpg', frame)
        #cv2.imwrite('d.jpg', frame)
        frame_container = jpeg.tobytes()
       
        #print frame_container
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release handle to the webcam
    video_capture.release()
    cv2.destroyAllWindows()
    
def main_run():
    
    while True:
        today = datetime.getDayOfWeak()
        t = datetime.getTimeShort()
        settings = Settings()
        start_time = settings.start_times
        stop_time = settings.stop_times
        if str(today) not in settings.work_days:
            print("Today is not a working day")
            time.sleep(5)
            continue
        if t > start_time and t < stop_time:
            train(train_dir="images",model_save_path="trained_knn_model.clf")
            main()
        else:
            print "Not in working time"
            time.sleep(5)
            continue



frame_container = None    
def printf():
    while True:
        print frame_container
if __name__ == "__main__":

    main_run()

    
