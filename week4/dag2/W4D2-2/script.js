//
// Opdracht A: getCarBrand
//

const car1 = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

const getCarBrand1 = car1.getBrand;

getCarBrand1();

// Bekijk de bovenstaande functie.
// Bedenk: wat gaat er naar de console worden gelogd? Schrijf je antwoord op.
// ------> undefined (hij zit in de functie waar brand nog niet gedefinieerd is)
// Check het antwoord. Run de code. Klopt het?
// ------> JA: undefined

//
// Opdracht B: Binding the method to the object
//

// ...Well, if we want to keep the reference to the original object, we need to explicitly
// bind the getBrand()  function to the car object when we assign it to the getCarBrand variable.
// We can do this by using thebind() method...

const car2 = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};
const getCarBrand2 = car2.getBrand.bind(car2);
getCarBrand2();   // output: .....??

// Bekijk de bovenstaande functie.
// Zoals je ziet is het **car object** gebind to getCarBrand variable.
// Welke output verwacht je? Waarom? Schrijf het op!
// ------>  Nissan, omdat je met de 'bind method' de variabele car hebt meegegeven en 'this' dan verwijst naar car.

//
// Opdracht C: This gebruiken in een callback function
//

// <button id="btnC" type="button">Get the car's brand (werkt niet)</button>

const carC = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

const elC = document.getElementById("btnC");
elC.addEventListener("click", carC.getBrand);

// ----> bovenstaand voorbeeld referereert de 'this' in 'car.getBrand' naar 'el' (de button)

// <button id="btn" type="button">Get the car's brand</button>

var carC2 = {
    brand: "Nissan",
    getBrandC2: function () {
        console.log(this.brand);
    }
};

var elC2 = document.getElementById("btn");
elC2.addEventListener("click", carC2.getBrandC2.bind(carC2));
// Hey car.getBrand functie, ik weet dat je nu op een element Button staat,
// maar je hoort bij het car object, daar bind ik je nu even expliciet aan vast.

//
// Opdracht D: this, that, context?
//

const car = {
    brand: "Nissan",
    getBrand: function () {
        const printBrandName = function () {
            console.log(this.brand);
        };
        return printBrandName();
    }
};

car.getBrand();

// Bedenk wederom wat de output zal zijn van deze functie.
// Waarnaar refereert this nu?
// Schrijf je verwachtig wederom op en run de code.
// ----> naar de 'getBrandD function'. Dus 'undefined'

// Oplossing hiervan is optie 1:

const carOption1 = {
    brand: "Nissan",
    getBrand: function () {
        const printBrandName = function () {
            console.log(this.brand);
        }.bind(this);
        return printBrandName();
    }
};

carOption1.getBrand();   // output: Nissan

// Oplossing optie 2:
// OF je kunt this opslaan in een andere variable:

const carOption2 = {
    brand: "Nissan",
    getBrand: function () {
        const self = this;
        // naast self kun je deze variable noemen zoals je wilt. 
        // Je ziet ook vaak : that, _this, me, context, etc
        const printBrandName = function () {
            console.log(self.brand);
        };
        return printBrandName();
    }
};

carOption2.getBrand();

// Waarnaar refereert het this keyword nu?
// Hoe kan het dat je nu wel access hebt tot het brand "Nissan"?
// ----> this refereert nu aan carOption2

//
// Opdracht E; This keyword en arrow functions
//

const carSelfConst = {
    brand: "Nissan",
    getBrand: function () {
        const self = this;
        const printBrandName = function () {
            console.log(self.brand);
        };
        return printBrandName();
    }
};

carSelfConst.getBrand();


// Je kunt nu zien hoe arrow functions je kunnen helpen bij het toegang houden tot the buitenste
// context (oftwel arrow functons zorgen ervoor dat je het keyword this gewoon nog kunt gebruiken.
// Arrow functions zijn nieuwe feature van ES6. Waarom is het zo nice?
// ------> door de arrow function blijft de scope van 'this' nog toegankelijk en heb je geen variabele meer nodig om 'this' te declareren.
// We laten je nu de bovenstaande syntax zien, maar dan met een arrow function:

const carArrowFunction = {
    brand: "Nissan",
    getBrand: function () {
        // the arrow function keeps the scope of "this" accessible.
        const printBrandName = () => {
            // const self = this; deze regel heb je niet meer nodig. 
            console.log(this.brand);
        };
        return printBrandName();
    }
};

carArrowFunction.getBrand();