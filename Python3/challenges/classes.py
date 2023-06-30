# Define the DriveBot class here!
class DriveBot:
    def __init__(self, speed = 0, dir=180, range=10):
      self.motor_speed = speed
      self.direction = dir
      self.sensor_range = range

    def control_bot(self, speed, dir):
      self.motor_speed = speed
      self.direction = dir
    def adjust_sensor(self, range):
      self.sensor_range = range


       
robot_1 = DriveBot(5, 90, 10)
robot_1.control_bot(10, 180)
robot_1.adjust_sensor(20)
# print(robot_1.motor_speed)
# print(robot_1.direction)
# print(robot_1.sensor_range)

# Create robot_2 here!
robot_2 = DriveBot(35, 75, 25)

print(robot_2.motor_speed)
print(robot_2.direction)
print(robot_2.sensor_range)