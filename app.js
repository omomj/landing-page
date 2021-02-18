/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//global variables 
const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//creat nav 
const navList = () => {
    //looping over all sections
    let NavUi = '';
    sections.forEach(section => { 
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;
        
        NavUi += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`

    });
    //append all elements
    menu.innerHTML = NavUi;
};

navList();

//add class 'active' tp section when in viewport

// getting the value that may be less or eqal to number
const offset = (section) => {
    return Math.floor (section.getBoundingClientRect().top);
};

// remove the active class
 const removeActive = (section) => {
     section.classList.remove('your-active-class');
     section.style.cssText= "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
 };
 // add the active one
 const addActive = (myCase,section) => {
 if (myCase){
        section.classList.add('your-active-class');
        section.style.cssText= "background-color:lightgreen;";
     };
};

//interpreting 
const activeClass = () => {
    //looping
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    
    });
};

window.addEventListener('scroll', activeClass);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Scroll to anchor ID using scrollTO event
const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i= 0; i=sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
       });

    });
};
scrolling();

/**
 * End Main Functions
 * 
*/



