let v = 0
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    if (v == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        v = 0
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    v = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
})
basic.forever(function () {
	
})
