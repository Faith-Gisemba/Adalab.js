// Creating objects
let person = {
    name : 'Ann',
    age : 20,
    height:"5Ft",
    friend:{
        name: "Beryl",
        age: 25
    }
}
let person1 = new Object();
person1.name = 'Edith';   //adding a new property
person1.age = 40;
console.log({person1})
console.log(person.age)  //log a value
person['age'] = 25;  //update an existingg property
console.log({person})
console.log(person.friend.age)
delete person.age
console.log({person})


//Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
 { name: 'Alice', age: 17 },
 { name: 'Eunice', age: 22 },
 { name: 'Charlie', age: 14 },
 { name: 'Max', age: 19 },
];

// function ageNames(){
//     let p =[];
//     let n =[];
//     for(let x =0; x< people.length; x++ ){
//         if(people[x].age <18){
//             p.push(people[x].name)
//         }
//         else{
//             n.push(people[x].name)
//         }
//     }
//     return p


// function getAdults(people){
//     let s =people.filter(function(person){
//        return person.age>=18; 
//     })
//     let p=s.map(function(person){
//         return person.name
//     })
//     return p
// }
// const p=getAdults(people)
// console.log(p)


function adults(people){
    for(p in people){
        return people.filter(p =>p.age>=18).map(p =>p.name)
    }
}
console.log(adults(people))

//Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
const products = [
 { name: 'Laptop', price: 1200, category: 'Electronics' },
 { name: 'Shirt', price: 25, category: 'Clothing' },
 { name: 'Headphones', price: 80, category: 'Electronics' },
 { name: 'Shoes', price: 60, category: 'Clothing' },
];
const x = products.reduce((group,array)=>{
    const {category} = array
    group[category] = group[category] ?? []
    group[category].push(array)
    return group
},{})
console.log(x)


let food = {
    name: 'Ugali',
    age : 50,
    height: '5feet',
    rice:{
        name: 'Basmat',
        age: '60'
    }
}
let food1 = new Object();
food1.name = 'Pishori'
food1.age = 20;
console.log({food1})
console.log(food1.age)
console.log({food})
food['age'] = 45;
console.log({food})








