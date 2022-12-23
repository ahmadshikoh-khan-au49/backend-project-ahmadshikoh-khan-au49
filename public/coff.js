const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav_items");
///////// open nav menu//////////////////
menuBtn.addEventListener("click",()=>{
    menu.style.display= 'block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})
//////////close nav bar/////////////
closeBtn.addEventListener("click",() =>{
    menu.style.display= 'none';
    menu.style.display= 'inline-block';
    closeBtn.style.display='none';

})
/////////faqs/////////
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');//////////////open and close hoga faq part////////////
////////////////change icon////////////
const icon = faq.querySelector('.faq_icon i');
if(icon.className ==='fa fa-plus-square-o'){
    icon.className = 'fa fa-minus';
}else{
    icon.className = 'fa fa-plus-square-o';
}
    })})