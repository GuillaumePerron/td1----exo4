input.onButtonPressed(Button.A, function () {
    if (X != 0) {
        X += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (X != 4) {
        X += 1
    }
})
let X = 0
X = 2
let Y = 2
basic.forever(function () {
    led.plot(X, Y)
    led.unplot(X + 1, Y)
    led.unplot(X - 1, Y)
})
