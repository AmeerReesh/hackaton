
const menu = document.getElementById('menu-icon');
const rules = document.getElementById('rules');

menu.addEventListener('click',()=>{
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
})

rules.addEventListener('click',()=>{
    window.location.href = 'learn.html';
})
