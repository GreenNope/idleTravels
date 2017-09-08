var gold = 0
var speed = 1
var biomedist = Math.floor((Math.random() * 999) + 1)

function tick() {
    distance = distance + speed
    speed = speed + speed * 0.001
}
    
