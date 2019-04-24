//10. Binary search w zadanej tablicy
// Dziel i zwyciężaj

function binarySearch (array, number) {
    var begin = 0
    var end = array.length - 1
    var middle = Math.floor((begin + end) / 2)

    // poki srodek to nie jest szukana liczba
    while (array[middle] !== number && begin < end) {
      if (number < array[middle]) {
        end = middle - 1
      } else {
        begin = middle + 1
      }

      middle = Math.floor((begin + end) / 2)
    }
    return (array[middle] == number) ? middle : -1;
  }

var array = [2, 5, 8, 9, 13, 45, 67, 99, 105]
console.log("Indeks liczby 99 w tablicy [2, 5, 8, 9, 13, 45, 67, 99] to: " + binarySearch(array, 105)) // 7 
console.log("Indeks liczby 67 w tablicy [2, 5, 8, 9, 13, 45, 67, 99] to: " + binarySearch(array, 67)) // 6 
console.log("Indeks liczby 45 w tablicy [2, 5, 8, 9, 13, 45, 67, 99] to: " + binarySearch(array, 45)) // 5 
console.log("Indeks liczby 13 w tablicy [2, 5, 8, 9, 13, 45, 67, 99] to: " + binarySearch(array, 13)) // 4 