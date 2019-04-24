//3. Funkcja sprawdzająca, czy przekazany ciąg jest palindromem
//Sprawdź dla ciągu "Kobyła ma mały bok" - to jest palindrom

function checkPali(str) {
    var words  = str.toLowerCase();
    var len = words.length;
    for (i = 0; i < len; i++) {
        return words.charAt(i) === words.charAt(len - i - 1) ? 
                true : false;
    }
}

    console.log("Kobyła ma mały bok: " + checkPali("Kobyła ma mały bok"));
    console.log("pałac dał Wisi władca Łap: " + checkPali("pałac dał Wisi władca Łap"));
    console.log(checkPali('maria'))