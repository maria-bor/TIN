//8. Funkcja przyjmująca tablicę liczb 
//i znajdująca drugą najmniejszą i drugą największą wartość

function findSecondMinAndMax(tab) {
    var arr = tab.sort(function (a, b) { return a - b });
    var min = arr[0];
    var max = arr[arr.length-1];
    var i = 0;
    while (min === arr[i + 1] && i < arr.length) {
        i++;
    }
    min = arr[i + 1];

    i = arr.length;
    while (max === arr[i - 1] && i > 0) {
        i--;
    }
    max = arr[i - 1];

    return "Druga najmniejsza liczba: " + min + " \nDruga największa liczba: " + max;
}

console.log(findSecondMinAndMax([12, 3, 3, 56, 56, 54]))