const m1 = './songs/s1.wav';
const m2 = './songs/s2.wav';
const m3 = './songs/s3.wav';
const m4 = './songs/s4.wav';
const m5 = './songs/s5.wav';
const m6 = './songs/s6.mp3';
const m7 = './songs/s7.mp3';

const sounds = new Map([
    ['w', m1],
    ['a', m2],
    ['s', m3],
    ['d', m4],
    ['j', m5],
    ['k', m6],
    ['l', m7],
])

const allButtons = document.querySelectorAll('.drum').length;

for(let i=0; i < allButtons; i++){
   document.querySelectorAll('.drum')[i].addEventListener('click', function(){
     const buttonInnerHTML = this.textContent;
        playSound(buttonInnerHTML);
        Highlight(buttonInnerHTML);
});
}


function playSound(key) {
    const audio = new Audio(sounds.get(key));
    audio.play();
   }

   document.addEventListener('keypress', function(event){
        const key = event.key.toLocaleLowerCase();
        playSound(key);
        Highlight(key);
   });

    function Highlight(currentKey){
       const pressed = document.querySelector(".selected");
       if(pressed){

              pressed.classList.remove("selected");
       }
        
        const activeButton = document.querySelector("." + currentKey);
        console.log(activeButton);
        activeButton.classList.add("selected");
    }
  