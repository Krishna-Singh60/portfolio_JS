let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
    this.classList.toggle('fa-bars');
})

let typed  = new Typed('.auto-input',{
    strings : ['.NET Developer', '.NET Full Stack Developer',  'C# Developer'],
    typeSpeed: 40,
    backSpeed : 20,
    backDelay : 800,
    loop : true,
})

// const spans = document.querySelectorAll('.skills-inner-line');

// spans.forEach((span) =>{
//     span.style.width = span.dataset.width;
//     span.innerHTML = span.dataset.width;
// })

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
                }
            })
        }
    })
})
