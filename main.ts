input.onButtonPressed(Button.A, function () {
    if (X == 0 && Y == 0) {
        led.unplot(X, Y)
        Y = 4
        X = 5
        led.plot(X, Y)
    }
    if (X == 0) {
        led.unplot(X, Y)
        Y += -1
        X = 5
        led.plot(X, Y)
    }
    if (X != 0) {
        X += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (X == 4 && Y == 4) {
        led.unplot(X, Y)
        Y = 0
        X = -1
        led.plot(X, Y)
    }
    if (X == 4) {
        led.unplot(X, Y)
        Y += 1
        X = -1
        led.plot(X, Y)
    }
    if (X != 4) {
        X += 1
    }
})
let Y = 0
let X = 0
X = 0
Y = 0
basic.forever(function () {
    led.plot(X, Y)
    led.unplot(X + 1, Y)
    led.unplot(X - 1, Y)
})
