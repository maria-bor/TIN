// 11. Stwórz obiekt przy pomocy inicjalizatora (object initializer), 
// obiekt powinien mieć przynajmniej 2-3 pola i 2-3 metody. 
// Napisz funkcję przyjmującą obiekt jako parametr i wypisującą wszystkie jego własności wraz z ich typami

var dog = {
    name: 'Bolek',
    birthday: new Date('2013-12-3'),
    eyescolor: 'Green',
    ownerFirstName: 'Borowiec',
    ownerLastName: 'Borowiec',

    get bday() {
        return this.birthday;
    },

    get ownerPeople() {
        return this.ownerFirstName + ' ' + this.ownerLastName;
    },

    set ownerPeople(name) {
        var names = name.toString().split(' ');
        this.ownerFirstName = names[0];
        this.ownerLastName = names[1];
    },
    
    years : function() {
        return Date.now() - this.bday();
    },

    sounds : function() {
        return 'Wrooof';
    }
 };

function showDog(object) {
    var message = '';
    for (prop in object) {
        message = message + "\n" + prop + " => " + typeof(object[prop]);
    }
    return message;
}

console.log(showDog(dog))