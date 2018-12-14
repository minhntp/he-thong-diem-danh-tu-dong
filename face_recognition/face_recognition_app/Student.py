# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 10:18:51 2018

@author: kuon
"""

class Student:
    name = None;
    student_id = None
    indent = None   
    birthday = None
    def __init__(self,name, student_id,indent, birthday):
        self.name = name
        self.student_id = student_id
        self.birthday = birthday
        self.indent = indent
    def getName(self):
        
        return self.name

    def getIndent(self):

        return self.indent

    def getBirthday(self):

        return self.birthday

    def getStudentId(self):

        return self.student_id
        
        