var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedboost = 0.01
var distance = 0
var walking = false
document.getElementById("biome").innerHTML = currentBiome.name


function tick() {
    
    if (walking == true) {
        distance = distance + speed
        speed = (Math.floor((speed + speed * speedboost) * 100))/100
        console.log("Walking")
    } else {
        console.log("Not Walking")
        for (i = 0; i < currentBiome.materials.length; i++) {
            console.log(currentBiome.materials[i].name)
        }
    }
    document.getElementById("speed").innerHTML = speed
    biomeDist = biomeDist - distance
    document.getElementById("biomeDist").innerHTML = biomeDist
}

window.setInterval(tick, 1000) 

//hey
