# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 09:57:06 2018

@author: kuon
"""
import mysql.connector

from Database import Database

from DailyRecord import DailyRecord

class DailyRecordModel:
    db_manager = None
    date_of_records =None
    is_table_made = False

    def __init__(self,date_of_record):
        self.db_manager = Database()
        self.date_of_records = date_of_record
        self.makeRecordsTable(self.date_of_records) 
        self.known_student_ids = []
    def getAllRecord(self):
        cursor = self.db_manager.getCursor()
        cursor.execute("SELECT * FROM `{}`".format(self.date_of_records))        
        result = cursor.fetchall()
        records = []
        for x in result:
            record = DailyRecord(x[0],x[1],x[2],x[3])
            records.append(record)     
        return student_list
    def getRecordByStudentId(self,id):
        cursor = self.db_manager.getCursor()
        cursor.execute("SELECT * FROM `{}` where student_id='{}'".format(self.date_of_records,id))
        result = cursor.fetchall()
        st = None
        for x in result:
            st = DailyRecord(x[0],x[1],x[2],x[3])
            break
        cursor.close
        return st
    def makeRecordsTable(self,date):
        if self.is_table_made == False:
            self.db_manager.createDailyRecordTable(date)
            self.is_table_made = True
    def insertRecord(self,record):
        self.known_student_ids.append(record.student_id)
        cursor = self.db_manager.getCursor()
        try:
            cursor.execute("INSERT INTO `{}` (`student_id`, `first_saw`, `last_saw`, `is_rec`) VALUES ('{}', '{}', '{}', '{}');".format(self.date_of_records,record.student_id,record.first_saw,record.last_saw,record.is_recog))        
            self.db_manager.getDb().commit()
        except:
            print("already in database")
        #self.known_student_ids.append(record.student_id)
        cursor.close()
    def updateRecord(self,record):
        cursor = self.db_manager.getCursor()
        cursor.execute("UPDATE `{}` SET `student_id` = '{}', `last_saw` = '{}', `is_rec` = '{}' WHERE `student_id` = '{}'".format(self.date_of_records,record.student_id,record.last_saw,record.is_recog,record.student_id))        
        self.db_manager.getDb().commit()
        #self.known_student_ids.append(record.student_id)        
        cursor.close()
    def getAllRegs(self):
        return self.known_student_ids
