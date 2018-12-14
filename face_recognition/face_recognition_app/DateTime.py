import datetime

class DateTime:
    def __init__(self):
        self.now = None
    def getDate(self):
        self.now = datetime.datetime.now()
        date = self.now.strftime("%Y-%m-%d")
        return date
    def getDayOfWeak(self):
        dayOfWeak = datetime.datetime.today().weekday()
        return dayOfWeak+2

    def getTime(self):
        self.now = datetime.datetime.now()
        time = self.now.strftime("%H:%M:%S")
        return time
    def getTimeShort(self):
        self.now = datetime.datetime.now()
        time = self.now.strftime("%H:%M")
        return time
d= DateTime()
print d.getTime()
print d.getDate()