const bars = document.querySelector('.bars');
const nav = document.querySelector('nav');

bars.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let NavLinkActive=document.querySelector("a.active");
let AllNavLinks=document.querySelectorAll("nav a");

AllNavLinks.forEach((ele) =>{
    ele.addEventListener("click",function(){
        NavLinkActive.classList.remove("active");
        this.classList.add("active");
        NavLinkActive=this;
    })
});

