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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const navMenu = document.querySelector('nav');
const mainContent = document.querySelector('main');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// ***** build the nav *****
const fragment = document.createDocumentFragment();

/** loop through sections, create element 'li' for each section, 
 * create element 'a' to add link to each section
 * then add class "menu__link", href using section's id and text from "data-nav" to link
 */
for (let i = 0; i < sections.length; i++){ 
    const newList = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.classList.add('menu__link')
    newLink.innerText = sections[i].dataset.nav;
    newLink.href = '#'+sections[i].id

    newList.appendChild(newLink)
    fragment.appendChild(newList);
}
navList.appendChild(fragment);

// ***** Add class 'active' to section when near top of viewport *****
const eachNavList = document.querySelectorAll('.menu__link');

/** create function that get section's position by getBoundingClientRect()
 * check position if new viewtop by condition top <=150, bottom >=150
 * if true, add class 'active' to section and each navigation list and highlight by color
 * if false, remove them
*/
function addActiveSection (section, eachNavList){
    const sectionPosition = section.getBoundingClientRect();
    if (sectionPosition.top <=150 && sectionPosition.bottom >= 150){
        section.classList.add('active');
        eachNavList.classList.add('active');
    }
    else {
        section.classList.remove('active');
        eachNavList.classList.remove('active');
    }
}

/** add event listener 'scroll' to each section using for loop
 * when event fires, execute function 'addActiveSection'
*/
document.addEventListener('scroll', function () {
    for (let e = 0; e < sections.length; e++){
        addActiveSection(sections[e], eachNavList[e]);
        

    }
});

// ***** Scroll to anchor ID using scrollIntoView *****

/** loop through each navigation list and then add event listener 'click'
 * if event happens, scroll to corresponding section
 * use preventDefault() to prevent moving by link clicked
*/ 
for (let x = 0; x < eachNavList.length; x++){
    eachNavList[x].addEventListener('click', function(){
        sections[x].scrollIntoView({behavior: 'smooth'});
        event.preventDefault();
        });
}

// ***** Hide fixed navigation bar while not scrolling *****

/** create variable timer to keep track of setTimeout
 * if timer is positive interger, cancel by clearTimeout
 * using setTimeout with delay 1000 ms to check if user are not scrolling by addEventListener
 * if not scrooling, hide the navigation bar by setting display to 'none'
*/
let timer = undefined;
document.addEventListener('scroll', function(){
    navMenu.style.display = 'block';
    if(timer > 0){
        clearTimeout(timer);
    }
    timer = setTimeout(function(){
        navMenu.style.display = 'none';
    }, 1000)
});

// ***** Add a scroll to the top button that’s only visible when the user scrolls below the fold of the page. *****

// create element div and button, attach button to div, then add buttonContainer at the end of main page
const buttonContainer = document.createElement('div');
const button = document.createElement('button');
buttonContainer.appendChild(button);
mainContent.appendChild(buttonContainer);

// style button and buttonContainer
button.textContent = 'Scroll To The Top';
buttonContainer.style.cssText = 'display: flex; align-items: center; justify-content: center;'
button.style.cssText = "color: black; background-color: white; padding: 1em; font-family: 'Merriweather', serif; text-align: center; border-radius: 8px;"


// add event listener if user click to button, then scroll to top
button.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


