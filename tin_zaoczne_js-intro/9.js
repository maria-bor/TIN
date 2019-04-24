//9. Funkcja podająca monety, przy pomocy których powinna być wydana konkretna kwota przy użyciu zadanych nominałów
// Przykładowe wywołanie: amountTocoins(46, [25, 10, 5, 2, 1])
// Kwota to 46, dostępne nominały to 25, 10, 5, 2, 1.  
// Wyjście: 25, 10, 10, 1

function amountTocoins(amount, coins) {
    var tabCoins = [];
    var i = 0;
    console.log('Kwota to ' + amount + ', dostępne nominały to ' + coins);
    while (amount !== 0) {
        if (amount >= coins[i]) {
            amount = amount - coins[i]; // 21 15 5 3 
            tabCoins.push(coins[i]); // 25 10 10 2
        }
        else i++;
    }
    return 'Wyjście: ' + tabCoins;
}

console.log(amountTocoins(48, [25, 10, 5, 2, 1]));