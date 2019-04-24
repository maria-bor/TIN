//13. Stwórz prototyp obiektu reprezentującego studenta przy pomocy inicjalizatora – 
// obiekt ma zawierać tablicę z listą przedmiotów z programu studiów, 
// przygotuj funkcję tworzącą nowe obiekty na podstawie prototypu, ustawiającą im własności imię, nazwisko i nr indeksu


//1.należy stworzyć obiekt zawierający przykładową listę przedmiotów (za pomocą inicjalizatora)
const Student = {
    init : function(name, surname, index) {
        this.name = name, this.surname = surname, this.index = index;
        return this;
    }, 
    subjects: ['MAS', 'CMS', 'TIN', 'ZPR']
};

// 2.należy stworzyć funkcję, w której stworzy Pani obiekt na podstawie powyższego obiektu (z listą przedmiotów) 
//wraz z ustawieniem odpowiednich pól podanych w argumencie funkcji (za pomocą odpowiedniej metody Object.create)
function createStudent(name, surname, index) {
    const newStudent = Object.create(Student).init(name, surname, index); // create new Object with the prototype set to a certain object
    return newStudent;
}

//3.aby przetestować czy działa, należy jednemu studentowi zmienić listę ocen (np. dodać element) i sprawdzić czy u drugiego również się zmieniło
const maria = createStudent('Maria', 'Borowiec', 13715);
console.log('Is ' + maria.name + ' is prototype of Student? ', Student.isPrototypeOf(maria));

const krzysztof = createStudent('Krzysztof', 'Borowiec', 13214);
console.log('Is ' + krzysztof.name + ' is prototype of Student? ', Student.isPrototypeOf(krzysztof));

krzysztof.subjects.push('MAD');
console.log('\nKrzysztof`s subjects: ' + krzysztof.subjects);
console.log('Maria`s subjects: ' + maria.subjects);

maria.subjects.push('JAVA'); 
console.log('\nKrzysztof`s subjects: ' + krzysztof.subjects);
console.log('Maria`s subjects: ' + maria.subjects);

var sortuj = function(str) {
    var str = str.split('').sort();
    str = str.join('');
    return str;
}
let word = 'dfcb'; 
console.log(sortuj(word))