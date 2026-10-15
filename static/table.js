function showTable(data) {
    const table = document.getElementById("table");
    const entries = data.split(/\r?\n/);

    for (const entry of entries){
        const practice = entries[entry].split(", ", 7);
        document.getElementById("table").innerHTML += "<tr>";
        for (const item of practice){
            if (!practice[item]){
                document.getElementById("table").innerHTML += "<td></td>";
            } else {
                document.getElementById("table").innerHTML += "<td>" + practice[item] + "</td>";
            }
        }
        document.getElementById("table").innerHTML += "</tr>";
    }
}