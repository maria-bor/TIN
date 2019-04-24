class Student {
    constructor(name, surname, index, marks) {
        this.name = name
        this.surname = surname
        this.index = index
        this.marks = marks
    }
    avrMarks() {
        if(this.marks.length === 0 || this.marks === undefined) 
            return ''
        var avr = 0
        for (var m of this.marks) { // of - wartosc zmiennej w tablicy // in - indeks tablicy
            avr += m
        }
        return (avr / this.marks.length).toFixed(2) // avr = Math.floor(avr/marks.length);
    }
}

const students = []
var lastRowClick = -1

document.getElementById('buttAddData').addEventListener('click', addStudent)
function addStudent() {
    var name = document.getElementById('name').value
    var surname = document.getElementById('surname').value
    var index = document.getElementById('index').value

    var newStudent = createAndAddStudent(name, surname, index, [])
    addNameIntoSelect(newStudent)
    dataTable(newStudent)
}

function createAndAddStudent(name, surname, index, marks) {
    var len = students.push(new Student(name, surname, index, marks))
    return students[len - 1]
}

function addNameIntoSelect(newStudent) {
    var select = document.querySelector('select')
    var option = document.createElement('option')
    option.innerHTML = newStudent.name
    select.appendChild(option)
}

function dataTable(newStudent) {
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0]

    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(tableRef.rows.length)

    // Insert a cell in the row at index 0 and // Append a text node to the cell
    newRow.insertCell(0).appendChild(document.createTextNode(newStudent.name))
    newRow.insertCell(1).appendChild(document.createTextNode(newStudent.surname))
    newRow.insertCell(2).appendChild(document.createTextNode(newStudent.index))
    newRow.insertCell(3).appendChild(document.createTextNode(newStudent.marks))
    newRow.insertCell(4).appendChild(document.createTextNode(newStudent.avrMarks()))

    newRow.childNodes.forEach(e => e.addEventListener("click", fillInputDataOnClick));
}

function fillInputDataOnClick() {
    var currentRow = this.closest('tr') //returns the closest ancestor of the current element
    document.getElementById('name').value = currentRow.childNodes[0].innerHTML
    document.getElementById('surname').value = currentRow.childNodes[1].innerHTML
    document.getElementById('index').value = currentRow.childNodes[2].innerHTML
    document.getElementById('marks').value = currentRow.childNodes[3].innerHTML
    lastRowClick = currentRow.rowIndex - 1
}

document.getElementById('buttModifyData').addEventListener('click', modifyStudent)
function modifyStudent() {
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0]
    var row = tableRef.rows[lastRowClick]
    students[lastRowClick].name = document.getElementById('name').value
    students[lastRowClick].surname = document.getElementById('surname').value
    students[lastRowClick].index  = document.getElementById('index').value

    row.childNodes[0].innerHTML = students[lastRowClick].name
    row.childNodes[1].innerHTML = students[lastRowClick].surname
    row.childNodes[2].innerHTML = students[lastRowClick].index

}

document.getElementById('buttAddMarks').addEventListener('click', addMark)
function addMark() {
    var listNames = document.querySelector('select')
    var name = listNames.options[listNames.selectedIndex].value
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0]

    for(s of students) {
        if(s.name === name) {
            s.marks.push(parseInt(document.getElementById('marks').value, 10)) // system dziesiątkowy

            for(r of tableRef.rows) {
                if(r.cells[0].innerHTML === s.name) {
                    r.childNodes[3].innerHTML = s.marks.join(',')
                    r.childNodes[4].innerHTML = s.avrMarks()
                }
            }
        }
    } 
}

document.getElementById('buttDeleteData').addEventListener('click', deleteStudent)
function deleteStudent() {
    students.splice(lastRowClick,1)

    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0]    
    tableRef.deleteRow(lastRowClick)
    lastRowClick = -1
    $('#name').val('')
    $('#surname').val('')
    $('#index').val('')
}