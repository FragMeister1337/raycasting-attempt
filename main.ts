namespace SpriteKind {
    export const cam = SpriteKind.create()
    export const frame = SpriteKind.create()
}
function doSomething (num: number) {
    dist = 0
    for (let index = 0; index <= 9; index++) {
        picture.fillRect(num * 10, dist, 10, 120, 2)
    }
}
let dist = 0
let picture: Image = null
picture = image.create(160, 120)
let mySprite = sprites.create(picture, SpriteKind.frame)
game.onUpdateInterval(500, function () {
    doSomething(0)
    doSomething(1)
    doSomething(2)
    doSomething(3)
    doSomething(4)
    doSomething(5)
    doSomething(6)
    doSomething(7)
    doSomething(8)
    doSomething(9)
    doSomething(10)
    doSomething(11)
    doSomething(12)
    doSomething(13)
    doSomething(14)
    doSomething(15)
})
