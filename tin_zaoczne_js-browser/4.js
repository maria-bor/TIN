document.getElementById('butt').addEventListener('click', validateData)
function validateData() {
    if (validateNumber() && validateEmail()) {
        alert("You have entered correct data!")
        return true
    }
    else {
        alert("You have entered an invalid data! Please correct them!")
        return false
    }
}

function validateNumber() {
    var age = document.getElementById('age').value
    
    if(isNaN(parseFloat(age.trim())) && !isFinite(age.trim()) || age.trim() === '') {
        alert("You have entered not a number!")
        document.form1.age.focus() //number.focus()
        return false
    }
    else {
        console.log(parseFloat(age))
        console.log(!isFinite(age))
        return true
    }
}

function validateEmail() {
    var email = document.getElementById('email').value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email.match(mailformat)) {
        alert("You have entered an invalid email address!")
        document.form1.email.focus()
        return false
    }
    else {
        return true
    }
}

//^	- the beginning of the string or line.
// \w+ - 1 or more word characters including the underscore. = [A-Za-z0-9_].
// [\.-] - \ Indicates that the next character is special and not to be interpreted literally.
//          .- matches character . or -.
// ? - Matches the previous character 0 or 1 time
// * - Matches the previous character 0 or more times.
// @ - @ character.
// \.\w{2,3} - . followed by two or three word characters (.edu, .org, .com, .pl, .co ...)
// + - 1 or more times
// $ - the end of the string or line.


// ! # $ % & ' * + - / = ?  ^ _ ` . { | } ~
//    period (".") may also appear, but may not be used to start or end the
//    local part, nor may two or more consecutive periods appear.  Stated
//    differently, any ASCII graphic (printing) character other than the
//    at-sign ("@"), backslash, double quote, comma, or square brackets may
//    appear without quoting.  If any of that list of excluded characters