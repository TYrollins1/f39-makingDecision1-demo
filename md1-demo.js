
let jonSnowAttack = 25
let jamiLannisterAttack = 35

if(jonSnowAttack > jamiLannisterAttack){
    console.log("Jon has better attack than Jamie")
}else if(jamiLannisterAttack > jonSnowAttack){
    console.log("Jamie has better attack than Jon")
}else{
    console.log("Jon and Jamie have the same attack")
}

console.log("------")


let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jamiLannisterAttack){
    console.log('Jon has been slain.')
}else{
    jonSnowHealth -= jamiLannisterAttack
    // jonSnowHealth = jonSnowHealth = jamieLannisterAttack
    console.log("Jon's health is down to " + jonSnowHealth)
}

console.log("------")

let coinLandsHead = false

if(coinLandsHead === true){
    console.log("The fight continues")
}else{
    console.log("Jon is allowed to run away")
}

console.log("------")

// for(let i = 0;i < 5; i++)
// if(jonSnowHealth <= 0){
//     console.log("JOn has been slain")
// }else{
//     jonSnowHealth -= jamiLannisterAttack
//     console.log(`Jon's health is ${jonSnowHealth}`)
    // console.log("Jons's health is " + jonSnowHealth)
//}

while(jonSnowHealth > 0){
    jonSnowHealth = jonSnowHealth - jamiLannisterAttack
    if(jonSnowHealth < 0){
        jonSnowHealth = 0
    }
    console.log(`Jon's health is ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log("Jon has been slain")
    }
}


