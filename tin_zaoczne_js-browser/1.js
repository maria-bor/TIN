document.getElementById("c").addEventListener("keyup", convertC) // keyup - Execute a JavaScript when a user releases a key
function convertC() {
    var x = document.getElementById("c").value * 9 / 5 + 32
    document.getElementById("f").value = Math.round(x)
}

document.getElementById("f").addEventListener("keyup", convertF)
function convertF() {
    var x = (document.getElementById("f").value - 32) * 5 / 9
    document.getElementById("c").value = Math.round(x)
}