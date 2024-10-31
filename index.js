
document.querySelectorAll(".drum").forEach(function(dram) { 
    dram.addEventListener("click" , function(){ 
    var buttonHTML= this.textContent;
    soundEvent(buttonHTML);
    buttonAnimation(buttonHTML);
 })})
document.addEventListener("keydown",function(event){
    soundEvent(event.key);
    buttonAnimation(event.key);
 })
function soundEvent(key){
    switch (key) {
        case "w" :
             var tom1 = new Audio('sounds/tom-1.mp3'); 
             tom1.play();
            break;
           
        case "a":
             var tom2 = new Audio('sounds/tom-2.mp3'); 
             tom2.play();
            break;

        case "s":
             var tom3 = new Audio('sounds/tom-3.mp3'); 
             tom3.play();
            break;

        case "d":
             var tom4 = new Audio('sounds/tom-4.mp3'); 
             tom4.play();
            break;

        case "j":
             var crash = new Audio('sounds/crash.mp3'); 
             crash.play();
            break;

        case "k":
             var kickbass = new Audio('sounds/kick-bass.mp3'); 
             kickbass.play();
            break;
            
        case "l":
            var snare = new Audio('sounds/snare.mp3'); 
            snare.play();
           break;

        default: console.log(buttonHTML);  
    }
}

function buttonAnimation(currentkey) {
    var activeKey = document.querySelector("." + currentkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}