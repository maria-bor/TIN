setTimeout('insertNewPar()', 5000)

function insertNewPar() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "I'm a new paragraph.";
    document.body.appendChild(paragraph)
}