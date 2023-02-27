serial.redirectToUSB()
basic.forever(function () {
    serial.writeString("left:")
    serial.writeString("" + (mecanumRobot.LineTracking(LT.Left)))
    serial.writeString("    right:")
    serial.writeString("" + (mecanumRobot.LineTracking(LT.Right)))
    serial.writeLine("")
})
