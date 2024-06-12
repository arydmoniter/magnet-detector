basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
})
