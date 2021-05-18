namespace SpriteKind {
    export const cam = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x = 0
})
function doSomething (num: number, color: number) {
    for (let index = 0; index <= 9; index++) {
        picture.fillRect(num * 10, index + 0 * 10, 10, 120, color)
    }
}
function calculate (deg: number) {
	
}
let mySprite: Sprite = null
let picture: Image = null
picture = image.create(160, 120)
let mySprite2 = sprites.create(img`
    3 
    `, SpriteKind.cam)
mySprite2.setPosition(25, 26)
let parameter = 0
let spagheetti = 0
tiles.setTilemap(tilemap`level2`)
mySprite = sprites.create(picture, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    let column = 0
    calculate(0)
    doSomething(0, column)
    calculate(1)
    doSomething(1, column)
    calculate(2)
    doSomething(2, column)
    calculate(3)
    doSomething(3, column)
    calculate(4)
    doSomething(4, column)
    calculate(5)
    doSomething(5, column)
    calculate(6)
    doSomething(6, column)
    calculate(7)
    doSomething(7, column)
    calculate(8)
    doSomething(8, column)
    calculate(9)
    doSomething(9, column)
    calculate(10)
    doSomething(10, column)
    calculate(11)
    doSomething(11, column)
    calculate(12)
    doSomething(12, column)
    calculate(13)
    doSomething(13, column)
    calculate(14)
    doSomething(14, column)
    calculate(15)
    doSomething(15, column)
})
