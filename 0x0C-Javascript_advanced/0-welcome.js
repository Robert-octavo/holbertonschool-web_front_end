function welcome(fistName, lastName) {
    let fullName = fistName + " " + lastName;
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}