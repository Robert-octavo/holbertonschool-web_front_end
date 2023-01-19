let globlalVariable = "Welcome";
function outer() {
    alert(globlalVariable);
    let course = "Holberton";
    function inner() {
        alert(globlalVariable + " " + course);
        let exclamation = "!";
        function inception() {
            alert(globlalVariable + " " + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();
