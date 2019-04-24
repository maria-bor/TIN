//5. Funkcja przyjmująca ciąg jako parameter 
//i zwracająca najdłuższe słowo w ciągu

function maxLenghtWord(str) {
    var tab = str.split(' ');
    var max = tab[0];
    for (i=1; i<tab.length; i++) {
        max = (tab[i].length > max.length)? tab[i] : max;
    }
    return max;
}

console.log("Najdłuższe słowo w ciągu /ala ma kota aaaa bababa jjjjjjjjjjjjjjjjjjjjjjjjjjjjj/ to: " + maxLenghtWord("ala ma rrrrrrrrr kota aaaa bababa "));