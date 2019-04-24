document.getElementById('butt').addEventListener("click", addData)

function addData() {
    var rows = ""
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var age = document.getElementById("age").value
    var city = document.getElementById("city").value

    rows += "<td>" + name + "</td><td>" + surname + "</td><td>" + age + "</td><td>" + city + "</td>"
    var tbody = document.querySelector("#list tbody")
    var tr = document.createElement("tr")

    tr.innerHTML = rows
    tbody.appendChild(tr)
}