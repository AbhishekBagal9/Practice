let playerWin =0;
let ComputerWin =0;
document.querySelectorAll(".you").forEach((playerMove)=>{
    playerMove.addEventListener("click",function(){
        let random = Math.floor(Math.random()*3)+1;
        let playerImg = playerMove.querySelector("img")
        let playerurl = playerImg.getAttribute("src")
        let computerImg = document.querySelector(".img4 img");
        let results = document.querySelector(".results").style.display ="block"
        computerImg.src =`images/r${random}.jfif`
        let computerHeader = document.querySelector(".computerMove h1");
        computerHeader.style.display = "block";
        document.querySelector("#choose").style.display= "none";
        let comM = document.querySelector(".computer");
        let computerurl = comM.querySelector("img").getAttribute("src");
        let result = document.querySelector("#Result")
        let reset = document.querySelector('#reset');

        reset.addEventListener("click",function(){
         playerWin =0;
         ComputerWin =0;
         computerResult.innerText = `${ComputerWin}`
    playerresult.innerText= `${playerWin}`
        })
        if(playerurl == computerurl){
            result.innerText ="Draw"
        }
        else if(
            (playerurl === "images/r2.jfif" && computerurl === "images/r3.jfif") ||
            (playerurl === "images/r4.jfif" && computerurl === "images/r1.jfif") ||
            (playerurl === "images/r1.jfif" && computerurl === "images/r2.jfif")
        ){
            result.innerText ="You Win"
            playerWin++;
            console.log(playerWin)
        }
        else{
            result.innerText="Computer win"
            ComputerWin++;
        }
     let computerResult = document.querySelector("#computerresult")
    let playerresult =document.querySelector("#youresult")
    computerResult.innerText = `${ComputerWin}`
    playerresult.innerText= `${playerWin}`
    })
})


