# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 09:09:00 2018

@author: kuon
"""

import mysql.connector

class Database:
    mydb =None
    def __init__(self):
        print ("Database init")
        self.mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="",
            database="student_manager"
        )
        
    def getDb(self):
        return self.mydb
    def createDailyRecordTable(self,date):
                
        mycursor = self.getCursor()
        mycursor.execute("""
            SELECT COUNT(*)
                FROM information_schema.tables
                WHERE table_name = '{}'
                """.format(date))
        if mycursor.fetchone()[0] == 0:
        #dbcur.close()
            mycursor.execute("CREATE TABLE `student_manager`.`{}` ( `student_id` VARCHAR(15) NOT NULL , `first_saw` TIME(6) NULL , `last_saw` TIME(6) NULL , `is_rec` BOOLEAN NULL , PRIMARY KEY (`student_id`)) ENGINE = InnoDB; ".format(date))
            mycursor.execute("INSERT INTO `{}` (`date`) VALUES ('{}');".format("date_record",date))
        mycursor.close()
    def getCursor(self):
        
        return self.mydb.cursor()
