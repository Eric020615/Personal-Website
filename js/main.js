/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle){
    // when user click the toggle button
    navToggle.addEventListener('click', () =>{
        // navMenu list will add the part named show-menu class in css
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click',() =>{
        // navMenu list will remove the part named show-menu class in css
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
// when user click one of the icons, the nav menu will be closed
// to add all the nav link element into the navLink
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
// if any icons of the navLink is clicked, linkAction() run
navLink.forEach(n => n.addEventListener('click', linkAction))


// -----------------------------ACCORDION SKILLS------------------------------------------
    // skillsContent (list) get all elements of document name skills_content
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')
    //   query selector all return a list of elements that match 
    //   the specified group of selector (classname: skills_header)

// this function is to hide the skills details
function toggleSkills(){
    // aim the parent tag of skills_header clicked
    // skill_content
    let itemClass = this.parentNode.className

    // closes all the skills lists
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    // if the itemclass is closed before, then change the skill content to skills open
    // to open the skill list
    // if the itemclass is opened before, then nothing happens
    if(itemClass == 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

// for each skills header in the list
skillsHeader.forEach((eL) =>{
    // when the skills header is clicked, run toggleSkills
    eL.addEventListener('click', toggleSkills)
})

// ----------------------QUALIFICATION TABS---------------------------------
// initialize array "tabs" with all the elements of document with name data-target
// initialize array "tabContents" with all the elements of document with name 
// data-content
 const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

// for each of the array tabs
tabs.forEach(tab =>{
    // when tabs is clicked
    tab.addEventListener('click', () =>{
        // when education tab is clicked, document element 
        // data content (education) is selected
        const target = document.querySelector(tab.dataset.target)

        // all data contents is hide first 
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        // let the target data content appears
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


// ------------------------------------------SERVICES MODAL--------------------------------------
// search class name services_modal (.services_modal)
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

function open(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

function close(modalCloses){
    modalViews[modalCloses].classList.remove('active-modal')
    modalViews.forEach((modalView) =>{
        modalView.classList.remove('active-modal')
    })
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        open(i)
    })
})

modalCloses.forEach((modalBtn, m) =>{
    modalBtn.addEventListener('click', () =>{
        close(m)
    })
})

// ---------------------------------PORTFOLIO SWIPER ------------------------------------
// connect the container that want to apply the swiper effect
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    // make the slide can rotate without stuck at each end of the slider (right end or left end)
    loop: true,

    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },

    pagination: {
       el: '.swiper-pagination',
       clickable: true,
    },
});

let swiper_testimonial = new Swiper('.testimonial_container',{
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
 
     pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
     },

     breakpoints:{
        568:{
            slidesPerView: 2,
        }
     }
});

// =================== SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        // get the height of the section
        const sectionHeight = current.offsetHeight
        // 50 above the top of the section
        const sectionTop = current.offsetTop - 50;
        // to get the id for the section that u are in
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

// change background header

function scrollHeader(){
    // to link the header to the variable nav
    const nav = document.getElementById('header')
    if(this.scrollY >= 80){
        nav.classList.add('scroll-header')
    }
    else{
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll',scrollHeader)