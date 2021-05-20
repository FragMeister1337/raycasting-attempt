namespace SpriteKind {
    export const cam = SpriteKind.create()
    export const frame = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
function doSomething (num: number) {
	
}
let myDart: Dart = null
let picture = image.create(160, 120)
let mySprite = sprites.create(picture, SpriteKind.frame)
let mySprite2 = sprites.create(img`
    1 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level13`)
controller.moveSprite(mySprite2, 100, 100)
mySprite.setPosition(80, 60)
scene.cameraFollowSprite(mySprite2)
myDart = darts.create(img`
    1 
    `, SpriteKind.Player)
myDart.angle = 45
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
