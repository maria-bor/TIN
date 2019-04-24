//7.Funkcja zwracająca typ otrzymanego parametru

function whatType(variable) {
    return typeof variable;
}

console.log("Typ zmiennej /'a'/ to: " + whatType("a"));
console.log("Typ zmiennej /1/ to: " + whatType(1));
console.log("Typ zmiennej /1.1/ to: " + whatType(1.1)); // bo wszystkie liczby są zmiennoprzecinkowe podwójnej precyzji
console.log("Typ zmiennej /true/ to: " + whatType(true));
console.log("Typ zmiennej /null/ to: " + whatType(null));
console.log("Typ zmiennej /[1,2,3]/ to: " + whatType([1,2,3]));
console.log("Typ zmiennej /undefined/ to: " + whatType(undefined));