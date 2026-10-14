function showForm(){
    var form = document.getElementById("form");
    var body = document.getElementById("body");
    form.style.visibility = "visible";
    body.style.opacity = 0.5;
    form.style.opacity = 1;
}

function hideForm(){
    var form = document.getElementById("form")
    form.style.visibility = "hidden";
}