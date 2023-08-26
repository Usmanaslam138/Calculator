let input = document.getElementById("input_text")
buttons = document.querySelectorAll("span")




let calBtn = Array.from(buttons)
let result = ""
calBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (input.value.length >= 17 && button.innerText !== "C" && button.innerText !== "DEL" && button.innerText !== "=") {
            alert("Its a simple calculator so you have a limit of 17 characters")
        }
        else if (button.innerText == "=") {
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


