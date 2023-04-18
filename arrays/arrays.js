// const items = [2,8,true,"seed",[7,9]];
// const a = new Array(2,8,true,"seed");
// console.log(items);
// console.log(a);

// console.log(items[3]);
// console.log(items[4][1]);

// items.push(6);  //used for adding an item at the last part.
// console.log(items);

// items.unshift("fruit")  //adds an item at the first part.
// console.log(items)

// items.pop();
// console.log(items);  //removes/delete the very last part of the item

// items.shift();  //removes the first part of the item.
// console.log(items)

// //Given an array of numbers,ruturn an array x of eachitem multiplied by 4
// let num = [1,3,4,6,9,34];
// let x = num.map(function(item){
//     return item *4 
// })
// console.log(x)

// let x1 = [];
// num.forEach(function(item){
// x1.push(item * 4)
    
// })
// console.log(x1)

// //Array concatination
// let mix = items.concat(num);
// console.log(mix)

// //spread
// let b = [false,"deny",...num]
// console.log(b)

// //destructing
// let [z,w,y,...v] = [1,2,3,4,56,78,90,57];
// console.log({z});
// console.log({w});
// console.log({y});
// console.log({v});


//Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
const arr1 = [3,7,34,90,12];
const arr2 = [true,"green","where",12,56];
arr = arr1.slice(-1);
ar = arr2.slice(-1);
console.log(arr);
console.log(ar);


//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];
const myPets = ["Cow","Bird","Snake","Dog"];
 let pet = myPets.join();
console.log(pet);


//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort()
console.log(arr3)



//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
//"orange", "mango", "mango"];
var arr = ["apple","mango","apple","orange","mango","mango","mango"]
let noDuplicates = [...new Set(arr)];
console.log(noDuplicates)

//only duplicates
let dupfruits = arr.filter((fruits, index) => {
    return arr.indexOf(fruits) !== index
});
console.log(dupfruits);



//Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5 = ["the","way","x",4];
const arr7 = arr5.includes("way");
if (arr7){
    console.log(arr7);
}
else{
       console.log("the search word was not found");
}

//Write a JS script to sort the following string
//let word = "sevink"
//yourString = yourString.split('').sort().join('');
let word = "sevink"
const sorting = word.split('').sort().join('');
console.log(sorting);

// const item = [2,8,false,"Arya",[3,5]];
// const  f = new Array(2,3,4,false,"Shania");
// console.log(item);
// console.log(f);

// console.log(item[3]);
// console.log(f[3]);
// console.log(item[4],[1]);
// console.log(item[2],[3]);

// item.push("lewinsky");
// console.log(item);

// item.shift();
// console.log(item);

// item.unshift("Halleluyah");
// console.log(item);

// item.pop();
// console.log(item);

// let arrayNum = [5,6,7,8,3,4,5];
// arrayNum.forEach((num) => console.log(num * 4));

// let i = arrayNum.map(function(one){
//     return(one * 4)
// })
// console.log(i)

// let o = arrayNum.map(function(only){
//     return(only * 10)
// })
// console.log(o);

// let holes = ["aminata","lowenzo","gabriga","ancient"];
// let yo = holes.map(function(leter){
//     return(leter.toUpperCase());
// })
// console.log(yo);

// let hooles = [90,120,40,230,340];
// hooles.forEach((ji) => console.log(ji / 10));

// let mixa = item.concat(hooles);
// console.log(mixa);

// let ba = [false,"killer",67,"Lion Of The Tribe Of Judah",...hooles];
// console.log(ba);

// let [n,q,s,...h] = [1,2,3,4,5,6,7];
// console.log({n});
// console.log({q});
// console.log({s});
// console.log({h});

let ar = [3,10,30,20,90];
// ar.forEach((ik) => console.log(ik * 4))

let a = ar.map(function(one){
    return one * 5
})
console.log(a)

let f = ["lemon","apple","mango","kiwi","yonky","guava"];
f.splice(2,2,"juice","kola");
console.log(f);

let mixa =ar.concat(f);
console.log(mixa);


// Revision


