let trial = "Hello";
trial = 'Hello';
trial =`Hello`;

let greeting = "there";
let mix = trial + " " + greeting;
console.log(mix);

mix =  `${trial} ${greeting}`;
console.log(mix);

console.log(trial[1]);

greeting[0] = "T";
console.log(greeting);
let a = ""

const fruits = ["Banana","Orange","Apple","Mango"];
fruits.splice(1,1,"lemon","kiwi");
console.log(fruits);


let sasa = "Hi"
sasa = `Hi`


let greet = "there"
let combo = sasa +" " + greet
console.log(combo)

combo =    `${sasa} ${greet} `  
console.log(combo);

let arr1 = [3,7,34,90,12]
console.log(arr1.slice(4,5));

let mypo = ["cow","birds","snake","dog"];
console.log(mypo.join());

var hj = [-5,9,5,3,2,-3,6,8,4,1]
console.log(hj.sort())

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
console.log([...new Set(arr)]);

console.log(arr.filter((fruits,index) => {
    return arr.indexOf(fruits) !== index

}));

console.log(arr.filter((fruits,index) => {
    return arr.indexOf(fruits) === index

}));

let fg = ["the","way","x",4];
let u = fg.includes("way");
if(u){
    console.log(u)
}
else{
    console.log("The search was not found")
}

let word = "amaka"
console.log(word.split('').sort().join(''));

const kiko = "The quick brown brown fox jumped over the lazy dog"
console.log(kiko.match(/brown/g).length);


let huk = ["aple","oran","sava","koi"];
console.log(huk.filter((fruits,index) =>{
    return huk.indexOf(fruits) !==index
}));





let man = ["sn","moon","star","yuio","star","sn"];
console.log(man.filter((jin,index) =>{
    return man.indexOf(jin) !==index
}));


console.log(man.filter((one,index) =>{
    return man.indexOf(one) ===index
}))

let wor = "uoiea"
console.log(wor.split('').sort().join(''));











