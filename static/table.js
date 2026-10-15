function showTable(data) {
    const table = document.getElementById("table");
    const headers = ["Date", "Duration", "Instrument", "Scales", "Exercises/Studies", "Pieces", "Description", "Date Entered"];

    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th")
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(row => {
        const tableRow = document.createElement("tr");

        headers.forEach(header => {
            const td = document.createElement("td");
            if (row[header] === "None") {
                td.textContent = "";
            } else if (header === "Scales" || header === "Exercises/Studies" || header === "Pieces") {
                td.textContent = "✔";
            } else{
                td.textContent = row[header];
            }
            tableRow.appendChild(td)
        });
        /*td.textContent = document.createElement("button");
        td.firstChild.setAttribute("type", "button");
        td.firstChild.setAttribute("onclick", "editEntry()");
        td.firstChild.textContent = document.createElement("img");
        td.firstChild.firstChild.setAttribute("src", "../static/edit.png");*/
        table.appendChild(tableRow)
    });
    
}