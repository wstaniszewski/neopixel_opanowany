input.onButtonPressed(Button.A, function () {
    jasnosc = 10
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.setBrightness(jasnosc)
    range = strip.range(0, 24)
    range.showRainbow(1, 320)
    serial.writeLine("Connected")
})
input.onButtonPressed(Button.AB, function () {
    jasnosc = 2
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.setBrightness(jasnosc)
    range = strip.range(0, 24)
    range.showRainbow(1, 320)
    serial.writeLine("Connected")
})
input.onButtonPressed(Button.B, function () {
    jasnosc = 150
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.setBrightness(jasnosc)
    range = strip.range(0, 24)
    range.showRainbow(1, 320)
    serial.writeLine("Connected")
})
input.onGesture(Gesture.Shake, function () {
    jasnosc = 150
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.setBrightness(jasnosc)
    range = strip.range(0, 1)
    range.showRainbow(1, 320)
    serial.writeLine("Connected")
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let jasnosc = 0
jasnosc = 50
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.setBrightness(jasnosc)
range = strip.range(0, 24)
range.showRainbow(1, 320)
serial.writeLine("Connected")
basic.forever(function () {
    strip.setBrightness(jasnosc)
    basic.pause(100)
    strip.show()
})
