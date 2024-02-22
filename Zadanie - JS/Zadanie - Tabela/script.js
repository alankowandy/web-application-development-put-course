// script.js

// Funkcja do usuwania wiersza
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateRowCount();
    updateRowColors();
}

// Funkcja do dodawania nowego wiersza
function addRow(name) {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var rowCount = table.getElementsByTagName('tr').length;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.textContent = rowCount;
    cell2.textContent = name;

    // Ustawienie możliwości edycji komórek po kliknięciu
    cell1.addEventListener('click', makeEditable);
    cell2.addEventListener('click', makeEditable);

    // Dodanie przycisków do komórki "Actions"
    cell3.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)">Delete</button>' +
                      '<button class="up-btn" onclick="moveRowUp(this)">Move Up</button>' +
                      '<button class="down-btn" onclick="moveRowDown(this)">Move Down</button>';

    updateRowCount();
    updateRowColors();
}

// Funkcja do umożliwienia edycji treści komórki
function makeEditable(event) {
    var cell = event.target;
    cell.contentEditable = true;
}

// Funkcja do aktualizacji liczby wierszy
function updateRowCount() {
    var rowCount = document.getElementById("myTable").getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
    document.getElementById("rowCount").innerText = "Liczba wierszy: " + rowCount;
}

// Funkcja do aktualizacji kolorów wierszy
function updateRowColors() {
    var tableRows = document.getElementById("myTable").getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].style.backgroundColor = i % 2 === 0 ? '#f9f9f9' : '#e5e5e5';
    }
}

// Funkcja do przenoszenia wiersza w górę
function moveRowUp(button) {
    var row = button.parentNode.parentNode;
    if (row.rowIndex > 0) {
        var newRow = row.parentNode.insertBefore(row.cloneNode(true), row.previousSibling);
        row.parentNode.removeChild(row);
        updateRowColors();
    }
}

// Funkcja do przenoszenia wiersza w dół
function moveRowDown(button) {
    var row = button.parentNode.parentNode;
    var nextRow = row.nextSibling;

    if (nextRow && nextRow.nodeType === 1) {
        // Sklonowanie następnego wiersza
        var clonedNextRow = nextRow.cloneNode(true);
        
        // Wstawienie sklonowanego wiersza przed bieżącym wierszem
        row.parentNode.insertBefore(clonedNextRow, row);

        // Usunięcie oryginalnego następnego wiersza
        row.parentNode.removeChild(nextRow);

        // Aktualizacja kolorów po przeniesieniu wiersza
        updateRowColors();
    }
}
