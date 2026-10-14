function showTable(data){
    for (let i = 0; i < data.length; i++){
        document.getElementById("table").innerHTML += "<tr>";
        var line = [];
        line = data[i].split(",", 7);
        if (line[j] == "None"){
            document.getElementById("table").innerHTML += "<td></td>"
        } else {
            for (let j = 0; j < line.length; j++){
                if (j == 3 || j == 4 || j == 5){
                    document.getElementById("table").innerHTML += "<td>✔</td>"
                } else{
                    document.getElementById("table").innerHTML += "<td>{line[j]}</td>"
                }
                        
        }
        document.getElementById("table").innerHTML += "</tr>";
    }
}}