// Deel A: Schrijf je eerste functie

// makeCheeseSandwich
//  Get one slice of bread.
//  Add cheese.
//  Put a slice of bread on top.

function makeCheeseSandwich() {
    console.log("Get one slice of bread")
    console.log("Add cheese")
    console.log("Put a slice of bread on top")
}

makeCheeseSandwich();



// Deel B: Schrijf een functie met een argument

// function declaration is hieronder
function makeSandwich(topping) {
    console.log("There you go, a sandwich with " + topping)
}

// function call is hieronder
makeSandwich('cheese');
makeSandwich('ham');



// Deel C: gebruik een return statement

const calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
};

console.log(calculateDiscountedPrice(20, 10.5));



// Deel D: gebruik meerdere return statements

const calculateDiscountedPriceD = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}
const discount25 = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
};

// meer dan 25 euro, dus discount:
console.log(discount25(35, 12.5));
// minder van 25 euro, dus geen discount:
console.log(discount25(20, 10.5));