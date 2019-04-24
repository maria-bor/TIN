//12.Napisz funkcje konstruktora, tworzącą obiekty reprezentujące studentów – 
// mają zawierać imię, nazwisko, nr indeksu, tablicę z ocenami i metodę wypisującą imię, nazwisko i średnią ocen

function Student(firstName, lastName, index, marks) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.index = index;
    this.marks = marks;

    this.info = function () {
        function avrMarks(marks) {
            var avr = 0;
            for (m of marks) { // of - wartosc zmiennej w tablicy // in - indeks tablicy
                avr += m;
            }
            avr = avr/marks.length; // avr = Math.floor(avr/marks.length);
            return avr;
        }      
        return this.firstName + " " + this.lastName + " " + avrMarks(marks);
    };
}
var mb = new Student('Maria', 'Borowiec', 13715, [3,4,5,6]);

console.log('Godność oraz średnia ocen studenta: ' + mb.info());