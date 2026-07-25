// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.

function checkTemperature(temp){
    if (temp>30) {
        return "It's Hot";
    } 
    else if (temp<15) {
        return "It's Cold";
    } 
    else {
        return "It's Normal";
    }
}

console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"

// checkTemperature(35); // Expected: "Hot"
// checkTemperature(10); // Expected: "Cold"
// checkTemperature(20); // Expected: "Normal"