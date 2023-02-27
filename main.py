def car_back():
    mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, 40)
    mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, 40)
    mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, 40)
    mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, 40)
def car_left():
    mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, 60)
    mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, 60)
    mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 85)
    mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 85)
def car_forward():
    mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 40)
    mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 40)
    mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 40)
    mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 40)
def car_right():
    mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 85)
    mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 85)
    mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, 60)
    mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, 60)

def on_forever():
    if mecanumRobot.line_tracking(LT.LEFT) == 0 and mecanumRobot.line_tracking(LT.RIGHT) == 1:
        car_right()
    elif mecanumRobot.line_tracking(LT.LEFT) == 1 and mecanumRobot.line_tracking(LT.RIGHT) == 1:
        car_left()
    elif mecanumRobot.line_tracking(LT.LEFT) == 0 and mecanumRobot.line_tracking(LT.RIGHT) == 1:
        mecanumRobot.state(MotorState.STOP)
    else:
        car_forward()
basic.forever(on_forever)
