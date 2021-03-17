var default_form = true;

function transformation() {
    if(default_form % 2){
        var notdef = document.getElementById("hero");
        var notback = document.getElementById("lab");
        notback.style.backgroundColor = "#70964b";
        notdef.style.fontSize = "130px";
        notdef.style.letterSpacing = "6px";
        document.getElementById("hero").innerHTML = "Hulk";
        default_form++;
    } else {
        var def = document.getElementById("hero");
        var back = document.getElementById("lab");
        back.style.backgroundColor = "#70964b";
        def.style.fontSize = "60px";
        def.style.letterSpacing = "2px";
        document.getElementById("hero").innerHTML = "Bruce Banner";
        back.style.backgroundColor = "#ffb300";
        default_form--;
    }
}
