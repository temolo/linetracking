function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 25)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 25)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 25)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 25)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 20)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 20)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 100)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 20)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 20)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
}
basic.forever(function () {
    if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 1) {
        car_right()
    } else if (mecanumRobot.LineTracking(LT.Left) == 1 && mecanumRobot.LineTracking(LT.Right) == 0) {
        car_left()
    } else if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 0) {
        mecanumRobot.state(MotorState.stop)
    } else {
        car_forward()
    }
})
