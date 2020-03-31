// Stap 1
// Tip: gebruik `${string interpolation}`

const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken!`);
    callback();
}

// Stap 2

const klaarMetHuiswerk = function () {
    setTimeout(() => {
        console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
    }, 3000);
}

// Stap 3

huiswerkMaken('wiskunde', klaarMetHuiswerk);

// Stap 4 gebruik setTimeout() in je huiswerkMaken functie
// setTimeout( , 3000); = 3 sec
