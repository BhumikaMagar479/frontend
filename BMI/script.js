document.getElementById("bmi-form").addEventListener("submit",
    function(e)
    {
        e.preventDefault();
    
 const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
const result = document.getElementById("result")

if (!height || !weight || height <=0 || weight <=0){
    result.textContent ="please enter valid height and weight!";
    return;
}
const heightInMeter =height / 100;
const bmi = (weight /(heightInMeter * heightInMeter)).toFixed(2);
  
let category = "";
if (bmi <18.5){
    category ="underweight";
}else if (bmi <24.9){
    category ="normal weight";
} else if (bmi < 29.9){
    category ="overweight";
} else {
    category ="obese";
}
  result.textContent = `Your BMI is ${bmi.toFixed(2)}.` + result.textContent;

    result.style.transform = "scale(1.1)";
    setTimeout(() => {
        result.style.transform = "scale(1)";
    }, 300);

}

);