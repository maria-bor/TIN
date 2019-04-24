//2.Funkcja licząca n-ty numer w ciągu Fibonacciego
//Sprawdź dla elementu 10 - powinno być 55

function fibonacci(number) {
    if (number < 2) return number;
  
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log("Fibonacci z 10: " + fibonacci(10));  