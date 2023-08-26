let input = document.getElementById("input_text")
buttons = document.querySelectorAll("span")


let calBtn = Array.from(buttons)
let result = ""
calBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText == "=") {
            result = eval(input.value)
            input.value = result
        } else if (button.innerText == "C") {
            result = ""
            input.value = result
        } else if (button.innerText == "DEL") {
            //substring result
            result = result.substring(0, result.length - 1)
            input.value = result
        } else {
            result += button.innerText;
            input.value = result
        }
    })
})


// let string = "usman"

// console.log(string.length)