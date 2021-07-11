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
let schwelleNeuerBuchstabe = 500
let schwelleLichtstärke = 200
let schwelleNeuerText = 3000
let text = ""
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
        if (dauerAus > schwelleNeuerBuchstabe) {
            if (position > 1) {
                text = "" + text + alleZeichen.charAt(position)
            }
            position = 1
        }
        if (text.length > 0 && dauerAus > schwelleNeuerText) {
            basic.showString(text)
            text = ""
            basic.clearScreen()
        }
    }
})
