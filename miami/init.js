// Arrays
// numeric
let numbers = [10,12,13,14,13,56]
// strings
let names = ["Peter","Jack","Mary","Claudia"]

// Access values of an array
console.log(names[0]);

// Array iteration
names.forEach((value,index)=>{
    //inside item
    console.log(value,index)
    if(value == "Mary"){
        console.log("Found Mary in position " + index);
        return
    }
 })

 // JavaScript Objects
 let person = {
    firstName:"Paige", //person.firstName
    lastName:"Swarthout", 
    ocupation:"Student",
    email:"pas265@miami.edu",
    getName: ()=>{
        console.log("My name is " + this.firstName + " " + this.lastName)
    }
 }

 console.log(person.firstName)
 //JSON (JavaScript object notation) does not store functions. Only key values

 let data = {
    brand:{
        name:"Miami Travel Site", //data.brand.name
        link: "/",
        img:"/images/logo.png"
    },
    links: [
        {
            text:"Home",
            href:"/"
        },
        {
            text:"Nightlife",
            href:"/nightlife"
        },
        {
            text:"Beaches",
            href:"/beaches"
        },
        {
            text:"About",
            href:"/about"
        }
    ]

 }

