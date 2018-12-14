# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 10:44:51 2018

@author: kuon
"""

# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 10:18:51 2018

@author: kuon
"""

class DailyRecord:
    is_recog = None;
    student_id = None
    first_saw = None   
    last_saw = None

    def __init__(self,student_id,first_saw,last_saw,is_recog):
        self.student_id = student_id
        self.is_recog = is_recog
        self.first_saw = first_saw
        self.last_saw = last_saw
    
    def getStudentID(self):
        
        return self.student_id

    def isRecognition(self):

        return self.is_recog

    def getFirstSawTime(self):

        return self.first_saw

    def getLastSawTime(self):

        return self.last_saw
        
        