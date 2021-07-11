input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
let position = 0
let dauerAus = 0
let neuesZeichen = false
let zuletztAus = 0
let dauerAn = 0
let zuletztAn = 0
let signalAn = false
let alleZeichen = "**ETIANMSURWDKGOHVF*L*PJBXCYZQ**"
let schwelleLang = 300
let neuerBuchstabe = 500
let schwelleLichtstärke = 200
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    signalAn = input.lightLevel() > schwelleLichtstärke
    if (signalAn) {
        zuletztAn = input.runningTime()
        dauerAn = zuletztAn - zuletztAus
        neuesZeichen = true
    } else {
        zuletztAus = input.runningTime()
        dauerAus = zuletztAus - zuletztAn
        if (neuesZeichen) {
            neuesZeichen = false
            if (dauerAn > schwelleLang) {
                position = 2 * position + 1
            } else {
                position = 2 * position
            }
        }
        if (dauerAus > neuerBuchstabe) {
            if (position > 1) {
                basic.showString(alleZeichen.charAt(position))
                basic.pause(10)
                basic.clearScreen()
            }
            position = 1
        }
    }
})