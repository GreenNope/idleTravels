var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedBoost = 0.01
var distance = 0
var walking = false
document.getElementById("biome").innerHTML = currentBiome.name


function tick() {
    
    if (walking == true) {
        distance = distance + speed
        speed = speed * (1 + speedBoost)
        console.log("Walking")
    } else {
        console.log("Not Walking")
        for (i = 0; i < currentBiome.materials.length; i++) {
            var currentMaterial = currentBiome.materials[i]
            var materialRandomizer = Math.random() * 100
            if (materialRandomizer > currentMaterial.chance) {
                console.log(currentMaterial.name)
            }
        }
    }
    document.getElementById("speed").innerHTML = speed
    document.getElementById("biomeDist").innerHTML = biomeDist - distance
}

window.setInterval(tick, 1000) 

//hey
