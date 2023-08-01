/*
function register(){

    let studentName = prompt("Enter Student Name:");

    let studentGrade1 = Number (prompt("Enter Student Grade for 101"));

    let studentGrade2 = Number (prompt("Enter Student Grade for 102"));

    let myAverage = (studentGrade1 + studentGrade2) / 2;

    //get the 101 grade

    //calculate the average (gpa)

    //display the 101 grade in the same <li>

    //display the average in the same <li>

    document.getElementById("studentList").innerHTML+=`<li class="text">${studentName} - FSDI 101: ${studentGrade1} - FSDI 102 ${studentGrade2} : GPA = ${myAverage.toFixed(2)} </li>`;

}
*/

function register(){

    let productName = prompt("Enter Product Name:");

    let price = Number (prompt("Enter Price"));

    let quantity = Number (prompt("Enter How Many"));

    let subtotal = (price * quantity); 

    const tax = 0.07;

    let calculation = (subtotal * tax);

    let total = (subtotal + calculation); 

    document.getElementById("itemName").innerHTML+=`<li class="text"> Product: ${productName} </li>`;
    
    document.getElementById("itemSubtotal").innerHTML+=`<li class="text"> Subtotal: $${subtotal} </li>`;
    
    document.getElementById("itemTotal").innerHTML+=`<li class="text"> Total: $${total.toFixed(2)} </li>`;

}
