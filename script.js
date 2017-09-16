var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedboost = 0.01
var distance = 0
document.getElementById("biome").innerHTML = currentBiome.name

function tick() {
    distance = distance + speed
    speed = (Math.floor((speed + speed * speedboost) * 100))/100
    document.getElementById("speed").innerHTML = speed
    document.getElementById("biomeDist").innerHTML = biomeDist - distance
}

window.setInterval(tick, 1000) 
