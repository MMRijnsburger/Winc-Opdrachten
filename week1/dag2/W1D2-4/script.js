const age = 35;
const isFemale = true;
const driverStatus = 'bob';

// const age = 14;
// const isFemale = false;
// const driverStatus = '';

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