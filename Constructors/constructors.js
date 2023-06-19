function Person(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.greet = function(){
        console.log('Hello');
    }
};
let adam = new Person('Adam',25,'7ft')

adam.weight = 60;
console.log({adam});

let eve = new Person('Eve',20,'5ft');
eve.weight = 80;
console.log({eve});

// Prototype
console.log(Person.prototype);
Person.prototype.race = 'Black'
Person.prototype.Nationality = 'Kenya'


console.log(adam.race);
console.log(eve.race);
console.log({adam});
console.log(adam.Nationality);
eve.Nationality = 'Uganda'
console.log({eve});
