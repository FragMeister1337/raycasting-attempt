namespace SpriteKind {
    export const cam = SpriteKind.create()
    export const frame = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    beamspeed += 5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    eyebeam = sprites.createProjectileFromSprite(img`
        1 
        `, mySprite2, 0, beamspeed)
    eyebeam2 = sprites.createProjectileFromSprite(img`
        1 
        `, mySprite2, beamspeed, 0)
    eyebeam3 = sprites.createProjectileFromSprite(img`
        1 
        `, mySprite2, Math.sqrt(beamspeed * beamspeed) / 2, Math.sqrt(beamspeed * beamspeed) / 2)
    eyebeam4 = sprites.createProjectileFromSprite(img`
        1 
        `, mySprite2, Math.sqrt(beamspeed * beamspeed) / 2 - 22.5 / 90 * beamspeed, Math.sqrt(beamspeed * beamspeed) / 2 + 22.5 / 90 * beamspeed)
    eyebeam5 = sprites.createProjectileFromSprite(img`
        1 
        `, mySprite2, Math.sqrt(beamspeed * beamspeed) / 2 + 22.5 / 90 * beamspeed, Math.sqrt(beamspeed * beamspeed) / 2 - 22.5 / 90 * beamspeed)
})
function doSomething (num: number) {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    beamspeed += -5
})
let eyebeam5: Sprite = null
let eyebeam4: Sprite = null
let eyebeam3: Sprite = null
let eyebeam2: Sprite = null
let eyebeam: Sprite = null
let beamspeed = 0
let mySprite2: Sprite = null
let picture = image.create(160, 120)
let mySprite = sprites.create(picture, SpriteKind.frame)
mySprite2 = sprites.create(img`
    1 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level13`)
mySprite.setPosition(80, 60)
mySprite2.setPosition(17, 17)
scene.cameraFollowSprite(mySprite2)
beamspeed = 50
forever(function () {
    info.setScore(beamspeed)
})
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
