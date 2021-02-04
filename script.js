const kelvin = 293;
// derajat kelvin
const celcius = kelvin - 273;
let fahrenheit = celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit.')
