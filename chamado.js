
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["titulo"] = document.getElementById("titulo").value;
    formData["descricao"] = document.getElementById("descricao").value;
    formData["equipa"] = document.getElementById("equipa").value;
    formData["aber"] = document.getElementById("aber").value;
    formData["iden"] = document.getElementById("iden").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titulo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descricao;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.equipa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.aber;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.iden;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("equipa").value = "";
    document.getElementById("aber").value = "";
    document.getElementById("iden").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titulo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("descricao").value = selectedRow.cells[1].innerHTML;
    document.getElementById("equipa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("aber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("iden").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titulo;
    selectedRow.cells[1].innerHTML = formData.descricao;
    selectedRow.cells[2].innerHTML = formData.equipa;
    selectedRow.cells[3].innerHTML = formData.aber;
    selectedRow.cells[4].innerHTML = formData.iden;
}

function onDelete(td) {
    if (confirm('Quer mesmo excluir ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("iden").value == "") {
        isValid = false;
        document.getElementById("idenValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idenValidationError").classList.contains("hide"))
            document.getElementById("idenValidationError").classList.add("hide");
    }
    return isValid;
}
