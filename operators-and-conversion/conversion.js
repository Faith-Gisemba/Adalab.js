let a = 10;
let b = "10";
//Implicit coercion
let c = b + a;
console.log(c);
// console.log("Turn to number",b*1)
let d = b * 1;
console.log(d + a);

let e = +b * a;
console.log({e});

//Explicit coercion
console.log({"number":Number(b)});
console.log({b})

console.log({"String":String(a)});

console.log({"array":Array(b)});

// Revision
let g = 20;
let l = "10";

// Implicit coercion
let v = g + l;
console.log(v);

let m = l * 3;
console.log(m + 9);

let jk = 89
let kj = "98"
let kjj = kj + jk
console.log(kjj)

let jkk = kj * 2;
console.log(jkk + jk);

// Explicit coercion
console.log({"number": Number(kj)});
console.log({kj});
console.log({"String": String(jk)});
console.log({"Array": Array(kj)});
console.log({"number": Number(jk)});

let ko = 10;
let ki = "90"

let ku = ko + ki
console.log(ku);

let ka = ki *  5
console.log(ka + 2)

console.log({"number": Number(ki)});
console.log({"string": String(ko)});





