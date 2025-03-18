
let startIndex = 1;

showSlides(startIndex);

function showSlides(n){
   let slides = document.getElementsByClassName('slide');

   if(n>slides.length) {startIndex = 1}
   if(n<1) {startIndex= slides.length}

   for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
   }
   slides[startIndex-1].style.display = "block";
}

function cal(n){
   showSlides(startIndex +=n)
}

function prev(){
   cal(-1)
}

function next(){
   cal(1)
}