console.log("Start of the execution queue");
setTimeout(() => { // setTimeout is a function that takes a function as a parameter and a time in milliseconds
    console.log("Final code block to be executed");
});
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("End of the loop printing");
