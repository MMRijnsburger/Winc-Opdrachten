// A Functie ombouwen tot arrow function

const ikRockArrowFunctions = () => {
    console.log('Joe, ik rock de arrow functions!');
}

ikRockArrowFunctions();

// B tot arrowfunction ombouwen en de curle braces {} weglaten

const fivePlusSeven = () => 5 + 7;

fivePlusSeven();

// C een zo kort mogelijke arrow function, zonder naam, die 1 + 2 bij elkaar optelt

() => 1 + 2;

// D arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bijelkaar optelt. Noem de functie myFunction.

const myFunction = (a, b) => a + b;

// myFunction(10, 5);

// E arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive. 

const addFive = a => a + 5;

// addFive(10);

// F arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({ greeting: 'hoi' });

// createObject();