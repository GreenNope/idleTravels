var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedboost = 0.01
var distance = 0
var walking = false
document.getElementById("biome").innerHTML = currentBiome.name
function toggleWalking() {
    walking != walking
}
function tick() {
    if (walking = true) {
        distance = distance + speed
        speed = (Math.floor((speed + speed * speedboost) * 100))/100
        console.log("Walking")
    } else {
        for (var mat in currentBiome.materials) {
            var rand = Math.floor(Math.random() * 101)
            if (rand <= mat.chance) {
                console.log(mat.name)
            }
        }
        console.log("Not Walking")
    }
    document.getElementById("speed").innerHTML = speed
    biomeDist = biomeDist - distance
    document.getElementById("biomeDist").innerHTML = biomeDist
}

window.setInterval(tick, 1000) 

//hey
