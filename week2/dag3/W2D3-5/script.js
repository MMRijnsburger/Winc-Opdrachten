// Opdracht: de "superpowers" van .map .filter .reduce

// Deze vorm van data heet: JSON - JavaScript Object Notation. Dit is een veel gebruikte vorm om data op te slaan en te gebruiken.

const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// Voor elke van de onderstaande opdrachten mag je alleen gebruik maken van .map, .filter of .reduce

// .map
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.

// .filter
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

// .reduce
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: this method does not change the original array.


// 1. Maak een array van alle superhelden namen

const superheroNames = superheroes.map((superhero) => {
    return superhero.name;
});

console.log("Superhelden namen:", superheroNames);

// 2. Maak een array van alle "lichte" superhelden (< 190 pounds)

const lightSuperheroes = superheroes.filter((superhero) => {
    return superhero.weight < 190;
});

console.log("Lichte superhelden:", lightSuperheroes);

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen

const superheroes200 = superheroes.filter((superhero) => {
    return superhero.weight == 200;
});

console.log("Superhelden namen (200 pounds, objects):", superheroes200);

const superheroNames200 = superheroes200.map((superhero) => {
    return superhero.name;
});

console.log("Superhelden namen (200 pounds, names):", superheroNames200);

// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

const superheroesFirstAppearances = superheroes.map((superhero) => {
    return {
        name: superhero.name,
        first_appearance: superhero.first_appearance
    };
});

console.log("Superhelden first appearances:", superheroesFirstAppearances);

// 5. A: Maak een array met alle superhelden van DC Comics. 

const superheroesDCComics = superheroes
    .filter((superhero) => {
        return superhero.publisher === "DC Comics";
    })
    .map((superhero) => {
        return superhero.name;
    });

console.log("Superhelden met publisher DC Comics:", superheroesDCComics);

// 5. B: Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

const superheroesMarvelComics = superheroes
    .filter((superhero) => {
        return superhero.publisher === "Marvel Comics";
    })
    .map((superhero) => {
        return superhero.name;
    });

console.log("Superhelden met publisher Marvel Comics:", superheroesMarvelComics);

// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
// Let op! Conditionals to the rescue! 
// Het gewicht dat je ziet in de movieDatabase, van welk datatype is dat? Een nummer? Of een string? STRING
// Oh ja, en hebben alle superhelden wel een gewicht? Nee, maar die is van Marvel Comics

const superheroesDCComicsWeight = superheroes
    .filter((superhero) => {
        return superhero.publisher === "DC Comics";
    })
    .map((superhero) => {
        return parseInt(superhero.weight);
    })
    .reduce((total, weight) => {
        return total + weight;
    });

console.log("DC Comics superhelden totaal gewicht:", superheroesDCComicsWeight, "pounds");

// 7. Doe hetzelfde met alle superhelden van Marvel Comics
// Oh ja, en hebben alle superhelden wel een gewicht? 1 superheld heeft geen gewicht

const superheroesMarvelComicsWeight = superheroes
    .filter((superhero) => {
        return superhero.publisher === "Marvel Comics" && superhero.weight !== "unknown";
    })
    .map((superhero) => {
        return parseInt(superhero.weight);
    })
    .reduce((total, weight) => {
        return total + weight;
    });

console.log("Marvel Comics superhelden totaal gewicht:", superheroesMarvelComicsWeight, "pounds");

// 8. Bonus: zoek de zwaarste superheld!

const heaviestSuperhero = superheroes
    .filter((superhero) => {
        return superhero.weight && superhero.weight.length && superhero.weight !== "unknown";
    })
    .map((superhero) => {
        return {
            name: superhero.name,
            weight: parseInt(superhero.weight)
        };
    })
    .reduce((previoushero, currenthero) => {
        if (currenthero.weight > previoushero.weight) {
            return currenthero;
        } else {
            return previoushero;
        }
    });

console.log("Op zoek naar de zwaarste superheld:", heaviestSuperhero.name);