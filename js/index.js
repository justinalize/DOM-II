            /////////// FIRST /////////////
let header = document.querySelector('header')
header.addEventListener('mouseover',function(event){
    event.target.style.backgroundColor='red'
})
            /////////// SECOND /////////////
header.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor ='white'
})
            /////////// THIRD /////////////
let button = document.querySelectorAll('.btn')
let buttonArray = Array.from(button)

for (i = 0; i < buttonArray.length; i++){
    buttonArray[i].addEventListener('click',function(event){
        event.target.style.backgroundColor='red'
    }) 
}// NOT WORKING YET COME BACK LATER


            /////////// FOURTH /////////////
window.addEventListener('load', function(event){
    alert('Welcome')
})
            /////////// FIFTH /////////////   
window.addEventListener('offline',function(event){
    alert('oh no you lost connection, Please try again:( ')
})           
            /////////// SIXTH /////////////   
 window.addEventListener('online',function(event){
     alert('WOO!! your connection is back')
 })
        /////////// SEVENTH /////////////  
document.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        alert('please no typing')
    }
})
            /////////// EIGHT ///////////// 
document.addEventListener('keyup',function(event){
    if(event.key === 'Escape'){
        alert('thanks for not trying to type anymore!!')
    }
})
            /////////// NINE /////////////  
header.addEventListener('dblclick', function(event){
    event.target.style.color='orange'
})

            /////////// TEN LOL /////////////  
window.addEventListener('resize',function(event){
    alert('hey whyd you resize me!!!')
})