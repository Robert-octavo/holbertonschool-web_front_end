function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

/*
Write a function named isPrime that will return true if a number is prime and false if it is not.
*/
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let timeCountPrimeNumber = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
console.log("Execution time of calculating prime numbers 100 times was " + (performance.now() - timeCountPrimeNumber) + " milliseconds.");