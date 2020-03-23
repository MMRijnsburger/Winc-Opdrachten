// const age = 35;
// const isFemale = true;
// const driverStatus = 'bob';

// const age = 14;
// const isFemale = false;
// const driverStatus = '';

// const age = 22;
// const isFemale = true;
// const driverStatus = 'bob';

// const age = 24;
// const isFemale = false;
// const driverStatus = 'bob';
// const name = 'Bram'

// const age = 25;
// const isFemale = true;
// const driverStatus = 'bob';
// const name = 'Sarah'
// const totalAmount = 10;

// const age = 25;
// const isFemale = true;
// const driverStatus = 'bob';
// const name = 'Sarah'
// const totalAmount = 26;

// const age = 25;
// const isFemale = true;
// const driverStatus = 'bob';
// const name = 'Sarah'
// const totalAmount = 51;

// const age = 25;
// const isFemale = true;
// const driverStatus = 'bob';
// const name = 'Sarah'
// const totalAmount = 100;

const age = 25;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sarah'
const totalAmount = 100;

if (age >= 18) {
    console.log("Je bent 18 jaar of ouder, je mag naar binnen.");
} else {
    console.log("Je bent nog geen 18, je wordt vriendelijk verzocht buiten te blijven.")
}

if (isFemale) {
    console.log("Je bent een vrouw.")
}
else {
    console.log("Je bent geen vrouw.");
}

if (driverStatus === 'bob') {
    console.log("Je bent de BOB!");
} else {
    console.log("Je bent niet de BOB.");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}

if (name === 'Sarah' || name === 'Bram') {
    console.log("Vanwege ons 50 jarig bestaan krijg je een gratis biertje!");
}

if (totalAmount >= 100) {
    console.log("Je hebt voor 100 euro of meer besteld aan drankjes, je krijgt een gratis fles champagne!");
} else if (totalAmount > 50) {
    console.log("Je hebt voor meer dan 50 euro besteld aan drankjes, je krijgt een gratis portie nachos!");
} else if (totalAmount > 25) {
    console.log("Je hebt voor meer dan 25 euro besteld aan drankjes, je krijgt gratis (vega)bitterballen!");
} else {
    console.log("Helaas geen korting voor jou!");
}