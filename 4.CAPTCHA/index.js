let capG = document.getElementById("captchagen");
let val = document.getElementById("value");
let result =document.getElementById("result")
function GenCaptcha(){
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 let uniquechar = "";
for(let i=1;i<5;i++){
   uniquechar += randomchar.charAt(
        Math.random()*randomchar.length
    )
}

capG.innerHTML = uniquechar;

}

function Check(){
    console.log(val.value)
    if(val.value === capG.innerHTML){
      result.innerHTML="Matched"
    }
    else{
         result.innerHTML=" Not Matched"
    }
    val.value =" "
}