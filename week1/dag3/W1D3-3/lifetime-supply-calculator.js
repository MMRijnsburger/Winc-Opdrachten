let calculateSupply = function (age, amountPerDay) {
    const maxAge = 65;
    let calculation = (amountPerDay * 365) * (maxAge - age);
    let answer = "You will need " + calculation + " candybars to last you until the ripe old age of " + maxAge + "!";
    console.log(answer);
}

calculateSupply(20, 7);
calculateSupply(35, 3);
calculateSupply(40, 15);