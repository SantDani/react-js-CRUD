const Person = {
    name: 'Santiago',
    age: 45,
    state: 'alone',
    child:{
        nameChild:'Glupo'
        
    }
}

console.log(Person);
console.log(Person.name);
console.log(Person.state);

// We can add attributes to object

Person.id = 1

console.log(Person.id); //1

// Aces to his child

console.log(Person.child.nameChild); // Glupo