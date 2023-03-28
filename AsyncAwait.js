console.log("Person 1: Shows Tickets")
console.log("Person 2: Shows Tickets")

const preMovie= async()=>{
 
    const promiseWifeBringTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve('Ticket')},1000)
    });
    
    const getPopcorn = new Promise((resolve,reject)=>{ resolve(`Popcorn`)})
    const getButter = new Promise((resolve,reject)=>{ resolve(`Butter`)})  
    let getColdDrink = new Promise((resolve,reject)=>{ resolve(`ColdDrink`)})  

    const ticket=await promiseWifeBringTickets;

    let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,getButter,getColdDrink])

    console.log(`${popcorn},${butter},${coldDrink}`)
    // console.log("Wife: I have tickets")
    // console.log("Husband: lets go in")
    // console.log("Wife: I am hungury")
    
    // let popcorn= await getPopcorn;

    // console.log("Husband: I have some Popcorn")
    // console.log(`Wife: I want Butter on Popcorn`)

    // let butter=await getButter;
    // console.log(`Husband: I have bring butter on popcorn`)
    // console.log(`Wife: I want Some Cold Drink`)

    // let coldDrink=await getColdDrink;
    
    // console.log("Husband : your cold drink is here... let go in") 

}

preMovie().then((m)=>console.log(m))
console.log("Person 4: Shows Tickets")
console.log("Person 5: Shows Tickets")



