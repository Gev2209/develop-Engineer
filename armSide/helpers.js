const line = document.querySelector('.infoLine');
const line1 = document.querySelector('.infoLine1');
const line2 = document.querySelector('.infoLine2');
const line3 = document.querySelector('.infoLine3');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const portfolio = document.querySelector('.portfolio');
const code = document.querySelector('.fa-code');
const info = document.querySelector('.info');
const arm = document.querySelector('.arm');
const rus = document.querySelector('.rus');
const en = document.querySelector('.en');
const login = document.querySelector('.login_box');
const log = document.querySelector('.header_login');
const iconF = document.querySelector('.fa-facebook');
const iconI = document.querySelector('.fa-instagram');
const iconT = document.querySelector('.fa-twitter');
const iconL = document.querySelector('.fa-linkedin');
const iconGitHub = document.querySelector('.fa-github');

// variables
export {
    line,
    line1,
    line2,
    line3,
    home,
    about,
    contact,
    portfolio,
    code,
    info,
    arm,
    rus,
    en,
    login,
    log,
    iconF,
    iconI,
    iconT,
    iconL
};


// functions
export {
    transformIconI,
    transformIconIDown,
    transformIconF,
    transformIconFDown,
    transformIconT,
    transformIconTDown,
    transformIconL,
    transformIconLDown,
    // transformIconG,
    // transformIconGDown
};

// facebook
const transformIconF = () => {
    iconF.style.transform = 'scale(1.3)'
    iconF.style.transition = 'all .1s'
}
// facebookDown
const transformIconFDown = () => {
    iconF.style.transform = 'scale(1)'
    iconF.style.transition = 'all .1s'
} 

// instagram
const transformIconI = () => {
    iconI.style.transform = 'scale(1.3)'
    iconI.style.transition = 'all .1s'
}
// instagram down

const transformIconIDown = () => {
    iconI.style.transform = 'scale(1)'
    iconI.style.transition = 'all .1s'
}

// twitter
const transformIconT = () => {
    iconT.style.transform = 'scale(1.3)'
    iconT.style.transition = 'all .1s'
}
// twitter Down
const transformIconTDown = () => {
    iconT.style.transform = 'scale(1)'
    iconT.style.transition = 'all .1s'
}

// linkedin
const transformIconL = () => {
    iconL.style.transform = 'scale(1.3)'
    iconL.style.transition = 'all .1s'
}
// linkedin Down
const transformIconLDown = () => {
    iconL.style.transform = 'scale(1)'
    iconL.style.transition = 'all .1s'
}
