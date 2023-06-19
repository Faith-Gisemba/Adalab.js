let person = {
    name:'Anne',
    age:  22,
    introduce: function(){
        console.log('Hello')
        console.log(`Hello my name is ${this.name}`)
    }
}
person.introduce()
person.greet = function(){
    console.log("How are you doing")
    console.log(`I am ${this.name}`);
}
person.greet();