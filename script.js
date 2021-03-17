
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
    formData["nome"] = document.getElementById("nome").value;
    formData["pricing"] = document.getElementById("pricing").value;
    formData["iden"] = document.getElementById("iden").value;
    formData["fabri"] = document.getElementById("fabri").value;
    formData["fabrica"] = document.getElementById("fabrica").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pricing;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.iden;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fabri;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.fabrica;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("pricing").value = "";
    document.getElementById("iden").value = "";
    document.getElementById("fabri").value = "";
    document.getElementById("fabrica").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pricing").value = selectedRow.cells[1].innerHTML;
    document.getElementById("iden").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fabri").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fabrica").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.pricing;
    selectedRow.cells[2].innerHTML = formData.iden;
    selectedRow.cells[3].innerHTML = formData.fabri;
    selectedRow.cells[4].innerHTML = formData.fabrica;
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
