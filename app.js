let birinci_eded = 14;
let ikinci_eded = 4;
let toplam = 0;


function topla() {
    toplam = birinci_eded + ikinci_eded;
    document.getElementById("Netice").innerHTML = "Neticemiz: " + toplam; 
}

function cixma() {
    toplam = birinci_eded - ikinci_eded;
    document.getElementById("Netice").innerHTML = "Neticemiz: " + toplam; 
}


function vurma() {
    toplam = birinci_eded * ikinci_eded;
    document.getElementById("Netice").innerHTML = "Neticemiz: " + toplam; 
}

function bolme() {
    toplam = birinci_eded / ikinci_eded;
    document.getElementById("Netice").innerHTML = "Neticemiz: " + toplam; 
}


