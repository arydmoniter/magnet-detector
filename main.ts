pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
})
