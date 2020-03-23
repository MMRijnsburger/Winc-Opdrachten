let tellFortune = function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    let prediction = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
    console.log(prediction);
}

tellFortune(10, "Randy", "New York", "baseballplayer");
tellFortune(2, "Sarah", "Amsterdam", "lawyer");
tellFortune(3, "Chris", "Calgary", "model");