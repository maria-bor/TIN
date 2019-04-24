//4.Funkcja zwracająca litery z zadanego ciągu w kolejności alfabetycznej
// Przykładowy string : 'webmaster'  
// oczekiwane wyjście : 'abeemrstw'

function sortLetters(str) {
    return str.split('').sort().join('');
}

console.log("Posortowany /webmaster/ : " + sortLetters("webmaster"));