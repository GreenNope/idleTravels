var gold = 0
var speed = 1
var biomeDist = Math.floor((Math.random() * 251) + 500)
var currentBiome = biomes.forest
var speedBoost = 0.01
var distance = 0
var walking = false
var inventory = {{id: 0, name: "None", count: 1}}
document.getElementById("biome").innerHTML = currentBiome.name


function tick() {
    
    if (walking == true) {
        distance = distance + speed
        speed = speed * (1 + speedBoost)
        console.log("Walking")
    } else {
        console.log("Not Walking")
    }
    document.getElementById("speed").innerHTML = Math.round(speed)
    document.getElementById("biomeDist").innerHTML = Math.round(biomeDist - distance)
}

window.setInterval(tick, 1000) 

//hey
