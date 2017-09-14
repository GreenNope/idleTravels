var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 999) + 1)
var currentBiome = biomes.forest
var speedboost = 0.001
document.getElementById("biome").innerHTML = currentBiome.name

function tick() {
    distance = distance + speed
    speed = speed + speed * speedboost
    document.getElementById("speed").innerHTML = speed
}
    
