let count = 0
basic.forever(function () {
    if (150 < input.lightLevel() && 0 == count) {
        basic.showNumber(1)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 1600, 1, 255, 0, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        count = 1
    } else if (50 > input.lightLevel() && 1 == count) {
        basic.showNumber(2)
        music.play(music.createSoundExpression(WaveShape.Triangle, 500, 499, 255, 0, 5000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        count = 0
    }
})
