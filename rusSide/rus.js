import { line,line1,line2,line3,home,about,contact,portfolio,code,info,arm,rus,en,login,log } from "./helpers.js"


// const loginHeader = () => {
//     login.style.transform = 'translate(0)';
//     login.style.transition = 'all 3s';
//     login.style.opacity = '1';
// }
// log.addEventListener('click',loginHeader);

// log.addEventListener('dblclick',function () {
//     login.style.transform = 'translate(0,-700px)';
//     login.style.transition = 'all 3s';
//     login.style.opacity = '0';
// })


const enFlag = () => {
    en.style.transform = 'translate(0,-10px)'
    en.style.transition = 'all .1s'
}
en.addEventListener('mouseenter',enFlag)

const engFlagDown = () => {
    en.style.transform = 'translate(0)'
    en.style.transition = 'all .1s'
}
en.addEventListener('mouseleave',engFlagDown)
// English
const rusFlag = () => {
    rus.style.transform = 'translate(0,-10px)'
    rus.style.transition = 'all .1s'
}
rus.addEventListener('mouseenter',rusFlag);
const rusFlagDown = () => {
    rus.style.transform = 'translate(0)'
    rus.style.transition = 'all .1s'
}
// Russian
rus.addEventListener('mouseleave',rusFlagDown)
const armFlag = () => {
    arm.style.transform = 'translate(0,-10px)'
    arm.style.transition = 'all .1s'
}
arm.addEventListener('mouseenter',armFlag);
const armFlagDown = () => {
    arm.style.transform = 'translate(0)'
    arm.style.transition = 'all .1s'
}
arm.addEventListener('mouseleave',armFlagDown)
// Armenia

const homeUp = () => {
    line.style.border = '2px solid white';
    line.style.borderRadius = '5px';
    line.style.transform = 'translate(0,-27px)';
    line.style.boxShadow = '1px 8px 14px white';
    line.style.transition = 'all 1s';
    home.style.color = 'gray'
    home.style.transition = 'all 1s'
}
home.addEventListener('mouseenter',homeUp);
// ///////////////////////////////////////////////codeInfo

const homeDown = () => {
    line.style.border = '2px solid white';
    line.style.transform = 'translate(0)'
    line.style.transition = 'all 1s'
    home.style.color = 'white'
    home.style.transition = 'all 1s'
    line.style.boxShadow = 'none';
    line.style.borderRadius = '0px';
}
home.addEventListener('mouseleave',homeDown);

// ///////////////////////////////////////////////Home

const aboutUp = () => {
    line1.style.border = '2px solid white';
    line1.style.borderRadius = '5px';
    line1.style.transform = 'translate(0,-27px)'
    line1.style.transition = 'all 1s'
    line1.style.boxShadow = '1px 8px 14px white';
    about.style.color = 'gray'
    about.style.transition = 'all 1s'
}

about.addEventListener('mouseenter',aboutUp)


const aboutDown = () => {
    line1.style.border = '2px solid white';
    line1.style.transform = 'translate(0)'
    line1.style.transition = 'all 1s'
    about.style.color = 'white'
    line1.style.boxShadow = 'none';
    line1.style.borderRadius = '0px'
}
about.addEventListener('mouseleave', aboutDown)
// ///////////////////////////////////////////////About


const contactUp = () => {
    line2.style.border = '2px solid white';
    line2.style.borderRadius = '5px';
    line2.style.transform = 'translate(0,-27px)'
    line2.style.transition = 'all 1s'
    line2.style.boxShadow = '1px 8px 14px white';
    contact.style.color = 'gray'
    contact.style.transition = 'all 1s'
}
contact.addEventListener('mouseenter',contactUp)


const contactDown = () => {
    line2.style.border = '2px solid white';
    line2.style.transform = 'translate(0)'
    line2.style.transition = 'all 1s'
    contact.style.color = 'white'
    line2.style.boxShadow = 'none';
    line2.style.borderRadius = '0px'
}
contact.addEventListener('mouseleave',contactDown)

// ///////////////////////////////////////////////Contact

const portfolioUp = () => {
    line3.style.border = '2px solid white';
    line3.style.borderRadius = '5px';
    line3.style.transform = 'translate(0,-27px)'
    line3.style.transition = 'all 1s';
    line3.style.boxShadow = '1px 8px 14px white';
    portfolio.style.color = 'gray'
    portfolio.style.transition = 'all 1s'
}

portfolio.addEventListener('mouseenter',portfolioUp)


const portfolioDown = () => {
    line3.style.border = '2px solid white';
    line3.style.transform = 'translate(0)'
    line3.style.transition = 'all 1s'
    portfolio.style.color = 'white'
    line3.style.boxShadow = 'none';
    line3.style.borderRadius = '0px'
}

portfolio.addEventListener('mouseleave',portfolioDown)

// ///////////////////////////////////////////////portfolio