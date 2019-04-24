// 1. Funkcja licząca silnię zadanej liczby – dwie implementacje, jedna rekurencyjna, 
//druga przy użyciu iteracji. Zaimplementuj funkcję rekurencyjną przy pomocy wyrażenia 
//(function expression), iteracyjną przy pomocy deklaracji (function declaration)

//itaracyjna function declaration
function silniaIter(number) {
    wynik = 1;
    while(number>0) {
        wynik = wynik*number;
        number--;
    }
    return wynik;
}
console.log("Silnia iteracyjna z 3: " + silniaIter(5));

//rekurencyjna function expression
var silniaRek = function silniaRek(n) {
    return n < 2 ? 1 : n*silniaRek(n-1);
}
console.log("Silnia rekurencyjna z 3: " + silniaRek(5));