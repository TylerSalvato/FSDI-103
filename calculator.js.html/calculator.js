function calculate(){
    let num1 = Number(prompt("Please enter the 1st number  "));
    let num2 = Number(prompt("Please enter the 2nd number"));
    let option = prompt("Please enter the option + - * / ");

    if (option == "+"){
        let sum = num1 + num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum} </p>`;
    }
    else if (option == "-"){
        let sum = num1 - num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum} </p>`;
    }
    else if (option == "*"){
        let sum = num1 * num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum} </p>`;
    }
    else if (option == "/"){
        if (num2==0)
        {
            console.log("You can not divide something by zero.")
        }
        let sum = num1 / num2;
        document.getElementById("result").innerHTML = `<p> ${num1} + ${num2} = ${sum} </p>`;
    }
}

