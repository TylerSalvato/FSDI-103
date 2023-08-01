function getUserAge() {
    let userBirthYear = Number (prompt("Enter your birth year"));
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();
    let age = currentYear - userBirthYear;
    console.log("your current age is " + age);
    displayAge(age);
    errorMessage("404" , "Page Not Found");
}

function displayAge(age) {
    let ageElement = document.getElementById("user-age");
    ageElement.textContent = `User age: ${age}`;
}

function errorMessage(title, message) {
    console.log(`${title}, ${message}`);
}

/*function displayError(NaN) {
    let errorElement = document.getElementById("Format needs to be YYYY")
    errorElement.textContent = `Format needs to be YYYY: ${Format needs to be YYYY}`
}

console.error("Format needs to be YYYY")

//please create the function that catch the error messages

function errorMessage(title. message) {
    console.log(`${title}, ${message}`);
}*/