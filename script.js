var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 999) + 1)
var currentBiome = biomes.forest
document.getElementById("biome").innerHTML = currentBiome

function tick() {
    distance = distance + speed
    speed = speed + speed * 0.001
}
    
