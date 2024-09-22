//showing navbar when click menu on mobile view
const mobile= document.querySelector('.menu-toggle');
const mobileLink= document.querySelector('.sidebar');

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})
//close menu when click again
mobileLink.addEventListener("click",function(){
    const menuBars= document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})
//move the menu to right and left when click back and next
var step=100;
var stepFilter=60;
var scrolling=true;
$(".back").bind("click",function)