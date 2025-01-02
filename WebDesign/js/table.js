// alert("table")
function new_data_add() {
    var table = document.getElementById('table');
    if (!table) {
        console.error("Table element not found!");
        return;
    }
    var length = table.rows.length;
    console.log("Number of rows in the table: " + length);
    newrow = table.insertRow(length);
    // console.log(newrow);
    var namecol = newrow.insertCell(0);
    var phonecol = newrow.insertCell(1);
    var opercol = newrow.insertCell(2);
    namecol.innerHTML = "bigbro"
    phonecol.innerHTML = "bigbro"
    opercol.innerHTML = "<button onclick='change_row(this)'>编辑</button><button onclick='delet_row(this)'>删除</button>"
}
function delet_row(button) {
    console.log(button);
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

function change_row(button) {
    console.log(button);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputname = prompt("Enter name:");
    var phonenum = prompt("Enter phone:");

    if (inputname && phonenum) {
        name.innerHTML = inputname;
        phone.innerHTML = phonenum;
    } else {
        alert("Name and phone cannot be empty. Update canceled.");
    }
}