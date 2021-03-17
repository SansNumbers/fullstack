let firstName = prompt("Enter your first name", '');
let lastName = prompt("Enter your last name", '');

let fullName = isValid(firstName);
if (fullName == null) {
    console.log("Wrong input!");
    alert("Wrong input!");
} else {
    fullName = isValid(lastName);
    if (fullName === null) {
        console.log("Wrong input!");
        alert("Wrong input!");
    } else {
        greetings(firstName, lastName);
    }
}

function upperFirstLetter(string) {
    if (string.charAt(0) != string.charAt(0).toUpperCase())
        return string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function isValid(string) {
    if (!(/^[a-z]+$/i.test(string)))
        return null;
    return 1;
}

function greetings(firstName, lastName) {
    firstName = upperFirstLetter(firstName);
    lastName = upperFirstLetter(lastName);
    console.log(`Hi ${firstName} ${lastName}`);
    alert(`Hi ${firstName} ${lastName}`);
}
