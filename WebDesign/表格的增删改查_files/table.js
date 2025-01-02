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
    opercol.innerHTML = "<button>添加</button><button>删除</button>"

}