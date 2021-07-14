const mobileMenu = document.querySelector(".mobile__menu")
const mobileAnimation = document.querySelector('.mobile__links');
const noScroll = document.querySelector('body');


mobileMenu.addEventListener('click', ()=>{
    if(mobileMenu.classList.contains("open")){ // close
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close')
        mobileAnimation.classList.remove('add')
        mobileAnimation.classList.add('remove');
        noScroll.classList.remove('scroll')
    }
    else{  // open
        mobileMenu.classList.add('open');
        mobileMenu.classList.remove('close')
        mobileAnimation.classList.add('add');
        mobileAnimation.classList.remove('remove');
        noScroll.classList.add('scroll')
    }
});


