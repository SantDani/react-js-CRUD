// Declare functions

const sayHello = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
}

sayHello(24.44, 'Say B', true);

// Curring

const funcA = (dato) =>{

    return dato;
}

const funcB = (b) => {
    console.log(b);
}

funcB(funcA('Santiago R.'));