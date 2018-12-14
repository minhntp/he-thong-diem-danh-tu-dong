# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 09:57:06 2018

@author: kuon
"""
import mysql.connector
from Database import Database
from Student import Student

class StudentModel:
    db_manager = None
    def __init__(self):
        print ("student init")
        self.db_manager = Database()
        
    def getAllStudent(self):

        cursor = self.db_manager.getCursor()

        cursor.execute("SELECT * FROM `student`")
        
        result = cursor.fetchall()
          
        student_list = []
        for x in result:
            st = Student(x[1],x[0],x[3],x[2])
            student_list.append(st)
            
        cursor.close()    
        return student_list
    def getStudentById(self,id):
        
        cursor = self.db_manager.getCursor()
        
        cursor.execute("SELECT * FROM `student` where id_of_student='{}'".format(id))

        result = cursor.fetchall()
        st = None
        for x in result:
            st = Student(x[1],x[0],x[3],x[2])
            break      
        cursor.close()
        return st
   
   