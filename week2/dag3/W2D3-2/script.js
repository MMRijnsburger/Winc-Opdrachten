// Opdracht: Array methods - deel 1

// A: Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B: Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = function (array) {
    return array.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// C: Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ookalweer met tellen? 0

const selectBelgiumFromBenelux = function (array) {
    return array[0];
    // return array.slice(0, 1);
    // return array.splice(0, 1);
    // return array.shift();
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// D: Schrijf een JavaScript functie om het laatste element uit een array te retourneren. (einde van array is -1, wanneer je de lengte van het array niet weet)

const lastElementInArray = function (array) {
    return array[array.length - 1];
    //return array.slice(-1);
    //return array.splice(-1);
    //return array.pop();
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E: Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren .
// Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.
// Slice kopieert deel uit originele array, dus houd array in tact
// Splice muteert deel uit originele array, dus array wordt aangepast

const presidents = ["Trump", "Obama", "Bush", "Clinton"]
const impeachTrumpSlice = function (array) {
    const sliceArray = array.slice(1, 4);
    console.log("Nieuwe array (na slice):", sliceArray, "Oude array (niets mee gebeurt)", array);
    return sliceArray;
}

const impeachTrumpSplice = function (array) {
    const spliceArray = array.splice(0, 1);
    console.log("Nieuwe array (na splice):", spliceArray, "Oude array (mutatie):", array);
    return array;
}

console.log(impeachTrumpSlice(presidents));
// resultaat na SLICE moet zijn: ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents));
// resultaat na SPLICE moet zijn: ["Obama", "Bush", "Clinton"]

// F: Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
// ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken. 
// Array method: join

const stringsTogether = function (array) {
    const stringsJoin = array.join(' ');
    console.log("De array is nu een zin geworden: ", stringsJoin);
    return stringsJoin;
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// G: Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']
// combineren van 2 arrays doe je met CONCAT: array1.concat(array2)

const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
console.log(combineArrays(['ook', 'deze', 'combineren'], ['met', 'dit', 'deel']));