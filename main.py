def on_button_pressed_a():
    global X
    if X != 0:
        X += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global X
    if X != 4:
        X += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

X = 0
X = 2
Y = 2

def on_forever():
    led.plot(X, Y)
    led.unplot(X + 1, Y)
    led.unplot(X - 1, Y)
basic.forever(on_forever)
