// Your code goes here
const title = document.querySelector('h1')
title.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor ='slategrey'
}) // EVENT ONE CHANGES COLOR OF H! WHEN I MOUSE OVER IT

title.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor ='white'
}) // EVENT TWO CHANGES BACK COLOR OF H1 WHEN I MOUSE OFF

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // prevents the default event from happening
    scale = Math.min(Math.max(.50, scale), 2);
    scrollZoom.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const scrollZoom = document.querySelector('img');
  scrollZoom.addEventListener('wheel', zoom);
  // THIRD EVENT
  let buts = document.querySelectorAll('.btn')
let butArray = Array.from(buts)
// adds all things with the class .btn to a nodelist then changes the nodelist to an array
for ( let i = 0; i < butArray.length;i++){ 
    butArray[i].addEventListener('click', function(event){
        event.target.style.backgroundColor ='red'
        event.target.style.color = 'black'// loops thru the array and changes appearence of each item when clicked
    })
}

 // EVENT FOUR CHANGES BUTTON COLOR WHEN PRESSED
title.addEventListener('dblclick',function(event){
    event.target.style.color ='pink'
})
// EVENT FIVE
document.addEventListener('keydown',function(event){
    if (event.key === 'Escape'){
      alert('you cant do that here')
    }
  })
  // if you press escape it will alert you the message
window.addEventListener('load',function(event){
    alert('Hey welcome to the Fun Bus')
})
//EVENT SIX displays a message when the page is loaded
let navnav = document.querySelectorAll('nav a')
let blueNav = Array.from(navnav)
for ( let i = 0; i < blueNav.length;i++){
    blueNav[i].addEventListener('focus',function(event){
        event.target.style.color = 'blue';  
    })
}
// EVENT SEVEN
window.addEventListener('offline',function(event){
    alert('you lost connection :(')
})
// EVENT EIGHT IF U LOSE CONNECTION IT WILL MAKE AN ALERT SAYING YOU LOST CONNECTION
window.addEventListener('online',function(event){
    alert('yay your internet is back')
})
// Event Nine if you lose connection and then gain it back it will alert that its back
window.addEventListener('resize',function(event){
    alert('woah whyd you resize? was it too small?')
})
// EVENT 10 FINALLY
// document.querySelector(".nav-link").addEventListener("click", function(event) {
//     event.preventDefault();
// }, false);


let Items = document.querySelectorAll('.nav-link')
let navArray = Array.from(Items)
for ( let i = 0; i < navArray.length;i++){
    navArray[i].addEventListener("click", function(event) {
        event.preventDefault();
    }, false);
}