// REST AND SPREAD OPERATORS

// Functie 1:
// Een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert meerdere argumenten
// Gebruik de rest operator om ervoor te zorgen dat je functie alle argumenten als een array behandelt.

// REST OPERATOR
const sumAll = (...input) => {
    let som = 0;

    for (let number of input) som += number;

    return som;
}

console.log('Uitkomst van de som versie 1 is:', sumAll(1, 2, 3, 4, 5, 6));
console.log('Uitkomst van de som versie 1 is:', sumAll(10, 100));

// Functie 1:
// Hieronder versie2 (na het bekijken van de Solution)

const sumAllVersion2 = (...input) => {
    return input.reduce((numberA, numberB) => {
        return numberA + numberB;
    })
}

console.log('Uitkomst van de som versie 2 is:', sumAllVersion2(1, 2, 3, 4, 5, 6));
console.log('Uitkomst van de som versie 2 is:', sumAllVersion2(10, 100));

// Functie 2:
// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert 1 argument, namelijk een array van cijfers
// Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

// SPREAD OPERATOR

const sumAllNumbers2 = (argument) => {
    return sumAllVersion2(...argument);
}

const sum2 = sumAllNumbers2([1, 4, 5, 7, 33, 4, 5, 6]);

console.log(`Uitkomst van sumAllNumbers2 is: ${sum2}`);


// Functie 2:
// Hieronder versie2 (na het bekijken van de Solution)

const sumFunction2 = (numberA, numberB, numberC) => {
    return numberA + numberB + numberC;
}

const numbers = [4, 5, 6];

console.log('Uitkomst van de som is:', sumFunction2(...numbers));