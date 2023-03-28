console.log("Person 1: Shows Tickets")
console.log("Person 2: Shows Tickets")

const promiseWifeBringTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('Ticket')},1000)
});

let getPopcorn = promiseWifeBringTickets.then((t)=>{
    console.log("Wife: I have tickets")
    console.log("Husband: lets go in")
    console.log("Wife: I am hungury")
    return new Promise((resolve,reject)=>{ resolve(`${t} Popcorn`)})  
})
let getButter = getPopcorn.then((t)=>{
    console.log("Husband: I have some Popcorn")
    console.log(`Wife: I want Butter on ${t}`)
    return new Promise((resolve,reject)=>{ resolve(`${t} Butter`)})  
})
let getColdDrink = getButter.then((t)=>{
    console.log(`Husband: I have bring ${t} on popcorn`)
    console.log(`Wife: I want Some Cold Drink`)
    return new Promise((resolve,reject)=>{ resolve(`${t} ColdDrink`)})  
})
getColdDrink.then((t)=>{ console.log("Husband : your cold drink is here... let go in") 
console.log(t)})

console.log("Person 4: Shows Tickets")
console.log("Person 5: Shows Tickets")



