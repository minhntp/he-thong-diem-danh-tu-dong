# -*- coding: utf-8 -*- 
#import libraries
import cv2
import numpy as np
#import classifier for face and eye detection
# Import Classifier for Face and Eye Detection
face_classifier = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

def face_detector (img, size=0.5):
# Convert Image to Grayscale
    gray = cv2.cvtColor (img, cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale (gray, 1.3, 5,minSize=(30,30))
    if len(faces) == 0:
        print ('face is none')
        return img
# Given coordinates to detect face and eyes location from ROI
    for (x, y, w, h) in faces:
        cv2.rectangle (img, (x, y), (x+w, y+h), (255, 0, 0), 2)
    return img
# Webcam setup for Face Detection
cap = cv2.VideoCapture (0)
while True:
    ret, frame = cap.read ()
    cv2.imshow ('Our Face Extractor', face_detector (frame))
    if cv2.waitKey (1) == 13: #13 is the Enter Key
        break
# When everything done, release the capture
cap.release ()
cv2.destroyAllWindows ()
