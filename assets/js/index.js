
var home = document.querySelector("#home");
var main = document.querySelector("#main");
var eventKey = document.querySelector("#eventKey");
var eventCode = document.querySelector("#eventCode");
var eventWhich = document.querySelector("#eventWhich");
var key = document.querySelectorAll('.key');


new ClipboardJS('.btn');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




document.addEventListener("keyup",function(e){
   home.classList.add("d-none");
   main.classList.remove("d-none");
  document.body.style.cssText = " backdrop-filter: blur(5px);"
  if(e.code == "Space")
  {
    eventKey.innerHTML = "Blank Space";
  }
  else
  {
    eventKey.innerHTML = e.key;
  }
  eventCode.innerHTML = e.code;
  eventWhich.innerHTML = e.keyCode;
})

document.body.addEventListener('keydown',(e)=>{
    for(var i=0;i<key.length;i++){
    if(e.code == `${key[i].getAttribute("myKey")}`){
        key[i].classList.add('active');}}
})
document.body.addEventListener('keyup',(e)=>{
    for(var i=0;i<key.length;i++){
    if(e.code == `${key[i].getAttribute("myKey")}`){
        key[i].classList.remove('active')}} 
})



document.addEventListener('keydown', (e) => {
  e = e || window.event;
  if(e.key == "F1"||e.key == "F3"||e.key == "F5"||e.key == "F6"||e.key == "F7"||e.key == "F10"||e.key == "F11"||e.key == "F12"||e.key == "Meta"||e.key == "Alt"||e.key == "Tab"){
      e.preventDefault();
  }
});



