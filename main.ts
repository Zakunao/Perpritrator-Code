radio.onReceivedNumber(function (receivedNumber) {
    heartrate = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    DistanceSelection = signal
})
input.onButtonPressed(Button.AB, function () {
    DistanceSelection = 95
    music.setVolume(0)
})
radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let signal = 0
let heartrate = 0
let DistanceSelection = 0
DistanceSelection = 95
radio.setGroup(10)
radio.setTransmitPower(7)
music.setVolume(0)
heartrate = 400
music.stopAllSounds()
basic.forever(function () {
    if (signal >= DistanceSelection) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.setVolume(70)
        music.play(music.stringPlayable("C5 - - C5 - - - - ", heartrate), music.PlaybackMode.UntilDone)
        radio.sendValue("anxiety", 1)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        radio.sendValue("anxiety", 0)
    }
    radio.sendString("1")
    basic.pause(111)
})
