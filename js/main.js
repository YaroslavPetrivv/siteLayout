const toggle = document.getElementById('toggle-burger-menu');
const menu = document.getElementsByClassName('toggle-burger-menu')[0];


toggle.addEventListener('click', function () {
    (!toggle.classList[1]) ? toggle.classList.add('active') : toggle.classList.remove('active');
    (!menu.classList[1]) ? menu.classList.add('activeMenu') : menu.classList.remove('activeMenu');
})
