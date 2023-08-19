
var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  focus  : 'center',
  direction: 'rtl' 
} );

splide.mount();


var NavUl = document.getElementById("nav-ul");
var BtnOpen = document.getElementById("menu");
var btnclose = document.getElementById("mobile-arrow");
var logo = document.getElementById("mobile-logo");
var login = document.getElementById("li-login");
var imgUl = document.querySelectorAll(".img-ul-mobile");

btnclose.onclick = () => {
    NavUl.classList.remove("active");
    logo.classList.remove("active-mobile-logo");
    btnclose.style.display="none"
    login.style.display="none"


  
  
  
    
}

BtnOpen.onclick = () => {
    NavUl.classList.add("active");
    logo.classList.add("active-mobile-logo");
    btnclose.style.display="block"
    login.style.display="block"
    imgUl.forEach(function(img) {
     
   
      img.classList.add("active-img");



});
    

}











