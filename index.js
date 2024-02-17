let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    this.classList.toggle('fa-bars');
})

let typed  = new Typed('.auto-input',{
    strings : ['Full Stack Developer', 'React Developer',  'Frontend Developer'],
    typeSpeed: 40,
    backSpeed : 20,
    backDelay : 800,
    loop : true,
})

let navLinks = document.querySelectorAll('nav ul li a');
let sections = document.querySelectorAll('section');
console.log(sections, navLinks);
window.addEventListener('scroll', function () {
    const scrollpos = window.scrollY
     sections.forEach(e => { 
        if(scrollpos > e.offsetTop && scrollpos < (e.offsetTop + e.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(e.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                    console.log(sections.link);
                }
            })
        }
    })
})