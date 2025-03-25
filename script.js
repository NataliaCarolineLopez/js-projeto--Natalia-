// Controle do menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click,'() => {
    menuIcon.classList.toggle('bx-x');
    navList.classlist.toggle('open');

    // Bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open') ?
    'hiden' : 'auto'; 
});

// Fechar menu ao clicar nos links
document.querySelector('.navlist a').forEach(link => {
    link.addEventListener('click', () =>{
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

