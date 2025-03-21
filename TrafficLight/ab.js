let light1 = document.getElementById("light1")
let light2 = document.getElementById("light2")
let light3 = document.getElementById("light3")

let final = setInterval(function startLight(){
  let first = setTimeout(function(){
    light1.style.backgroundColor = "red"
  },0)

  let first1 = setTimeout(function(){
    light1.style.backgroundColor = "white"
  },2000)

  let second = setTimeout(function(){
    light2.style.backgroundColor = "yellow"
  },4000)

  let second1 = setTimeout(function(){
    light2.style.backgroundColor = "white"
  },6000)

  let third= setTimeout(function(){
    light3.style.backgroundColor = "green"
  },2000)

  let third1= setTimeout(function(){
    light3.style.backgroundColor = "white"
  },4000)
 
},6000)