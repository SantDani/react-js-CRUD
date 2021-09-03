const Person = {
    _name: 'Santiago',
    age: 45,
    state: 'alone',
    child:{
        nameChild:'Glupo'
        
    }
}


const {_name, age} = Person

console.log(_name)
console.log(age) 

const {nameChild} = Person.child

console.log(nameChild); // Glupo