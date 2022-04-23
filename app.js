const userInputDisplay = document.getElementById("input")
const section = document.querySelector("section")

const userInput = parseInt(prompt("Type a number"))

userInputDisplay.innerHTML = userInput 

for (let i = 1; i < userInput; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        section.innerHTML += "FizzBuzz "
    } else if (i % 3 === 0) {
        console.log("Fizz")
        section.innerHTML += "Fizz "
    } else if (i % 5 === 0) {
        console.log("Buzz")
        section.innerHTML += "Buzz " 
    } else {
        console.log(i)
        section.innerHTML += i + " "
    }  
}