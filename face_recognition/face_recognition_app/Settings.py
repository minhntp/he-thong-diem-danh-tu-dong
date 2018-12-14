# -*- coding: utf-8 -*-
"""
Created on Tue Oct 16 09:57:06 2018

@author: kuon
"""
import mysql.connector
from Database import Database

class Settings:
    def __init__(self):
        print ("student init")
        self.db_manager = Database()
        setting = self.getSetting()
        self.min_score = setting[1]
        self.work_days = setting[2].split(',')
        self.start_times = setting[3]
        self.stop_times = setting[4]
    def getSetting(self):

        cursor = self.db_manager.getCursor()

        cursor.execute("SELECT * FROM `settings`")
        
        result = cursor.fetchone()

        return result

   

    