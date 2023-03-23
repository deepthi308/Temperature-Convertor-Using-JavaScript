const buttons = document.querySelectorAll(".button")
const celsius = document.querySelector("#celsius")
const fahrenheit = document.querySelector("#fahrenheit")
const kelvin = document.querySelector("#kelvin")
const warn = document.querySelector(".warning");
const clear = document.querySelector(".btn");



const compute = (button) => {

   
    let cVal = Number(celsius.value);
    let fVal = Number(fahrenheit.value);
    let kVal = Number(kelvin.value);
    
    let className = button.className;
    //  console.log(className.includes("c-btn"))
    if (className.includes("c-btn"))
    {
        if (cVal == "")
        {
            warn.innerText = "Please enter any one of the value"
        }
        else
        {
        warn.innerText = ""
        fVal = ((cVal * 9)/5+32).toFixed(2)
        kVal = (cVal + 273.15).toFixed(2)
        fahrenheit.value = fVal;
        kelvin.value = kVal;
        }
    }
    else if (className.includes("f-btn"))
    {
        if (cVal == "")
        {
            warn.innerText = "Please enter any one of the value"
        }
        else
        {
        warn.innerText = ""
        cVal = (((fVal-32)*5)/9).toFixed(2)
        kVal = ((fVal-32)*5/9+273.15).toFixed(2)
        celsius.value = cVal;
        kelvin.value = kVal;
        }
    }
    else
    {
        if (cVal == "")
        {
            warn.innerText = "Please enter any one of the value"
        }
        else
        {
        warn.innerText = ""
        cVal = (kVal-273.15).toFixed(2)
        fVal = ((kVal-273)*9/5+32).toFixed(2)
        celsius.value = cVal;
        fahrenheit.value = fVal;
        }
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        compute(button)
    })

})


const clearVals = () => {
    celsius.value = "";
    kelvin.value = "";
    fahrenheit.value = "";
}
btn.addEventListener("click", clearVals)