function showTable(data) {
    const table = document.getElementById("table");
    const rows = (Array.isArray(data) ? data : data.split(/\r?\n/))
        .filter(row => typeof row === "string" && row.trim() !== "");

    for (const row of rows) {
        // Split CSV fields while preserving commas inside quoted values.
        const line = row.match(/(?:^|,)(?:"((?:[^"]|"")*)"|([^,]*))/g)
            .map(field => {
                const value = field.replace(/^,/, "");
                return value.startsWith('"')
                    ? value.slice(1, -1).replace(/""/g, '"')
                    : value;
            });
        const tableRow = document.createElement("tr");

        for (let j = 0; j < line.length; j++) {
            const cell = document.createElement("td");
            const value = line[j].trim();
            if (value && value !== "None") {
                cell.textContent = j === 3 || j === 4 || j === 5 ? "✔" : value;
            }
            tableRow.appendChild(cell);
        }

        table.appendChild(tableRow);
    }
}