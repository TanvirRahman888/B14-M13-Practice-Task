// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.

function checkTemperature(temp){
    if (temp>30) {
        console.log("It's Hot");
    } 
    else if (temp<15) {
        console.log("It's Cold");
    } 
    else {
        console.log("It's Normal");
    }
}

checkTemperature(20)