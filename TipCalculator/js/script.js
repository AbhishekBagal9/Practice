

function Result (){
    let output = document.getElementById("output")
    output.style.display = "block"
let Total = parseFloat(document.getElementById("total").value)
let Select =parseFloat(document.getElementById("select").value)

let Persons =parseFloat (document.getElementById("persons").value)
 let final = (Total * Select) / Persons;
 if(Persons = 1){
    let each = document.getElementById("each")
    each.style.display="none"
 }
 document.getElementById("perperson").innerHTML=final;
}