// 6. Funkcja sprawdzająca, czy zadana liczba jest liczbą pierwszą
// Sprawdź dla liczb 2,3,4
// Liczba pierwsza – liczba naturalna większa od 1, która ma dokładnie dwa dzielniki naturalne: jedynkę i siebie samą.

function primeNumber(number) {
    if(number < 2) return false;
    for (i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }
    return true;
}

console.log("Czy liczba 2 jest pierwszą: "+ primeNumber(2));
console.log("Czy liczba 3 jest pierwszą: "+ primeNumber(3));
console.log("Czy liczba 4 jest pierwszą: "+ primeNumber(4));