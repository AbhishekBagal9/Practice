
function divs(){
    for(let i=0;i<54;i++){
        const div = document.createElement("div");
        div.classList.add("colorDiv");
        document.querySelector(".colorme").appendChild(div);
    }
}


  document.querySelectorAll(".color-box").forEach((colorBox) =>{
    colorBox.addEventListener("click",function(){
        const color = this.style.backgroundColor;
        console.log(color);
        colorDivs(color)

 });
  });

function colorDivs(clr){
    document.querySelectorAll(".colorDiv").forEach((colorDiv) => {
        colorDiv.addEventListener("click",function(){
          colorDiv.style.backgroundColor = clr;
           
        })
    })
}