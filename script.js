var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedboost = 0.01
var distance = 0'
var walking = true
document.getElementById("biome").innerHTML = currentBiome.name

function tick() {
    if walking = true {
        distance = distance + speed
        speed = (Math.floor((speed + speed * speedboost) * 100))/100
    } else {
        var totalChance = 0
        for (var mat in currentBiome.materials) {
            totalChance += mat.chance
        }
    }
    document.getElementById("speed").innerHTML = speed
    biomeDist = biomeDist - distance
    document.getElementById("biomeDist").innerHTML = biomeDist
}

window.setInterval(tick, 1000) 
