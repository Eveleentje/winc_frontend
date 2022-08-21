// Menu toggle
let menuButton = document.querySelector('.btn-toggle-nav');

let toggleNavStatus = false;

let toggleNav = function () {
    let getNavbarUl = document.querySelector(".nav-navbar ul");

    if (toggleNavStatus === false) {
        getNavbarUl.style.visibility = "visible";
        getNavbarUl.style.transform = "translateX(50px)";


        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getNavbarUl.style.visibility = "hidden";
        getNavbarUl.style.left = "-50px";
        getNavbarUl.style.transition = "transform .5s ease";
        getNavbarUl.style.transform = "translateX(-100%)";

        toggleNavStatus = false;
    }
};

menuButton.addEventListener('mouseover', toggleNav);

// Close menu after picking a color

let lis = document.querySelectorAll('li');

Array.from(lis).forEach(function (li) {
    li.addEventListener('click', function (e) {

        toggleNav();

    });

});

// Color change

let body = document.getElementsByTagName('BODY')[0];

let ochre = document.querySelector('#ochre');
let seafoam = document.querySelector('#seafoam');
let fuchsia = document.querySelector('#fuchsia');
let blue = document.querySelector('#blue');
let home = document.querySelector('#home');
let text = document.querySelector('#text');

function colorOchre() {
    body.style.background = "#FF9D02";
    text.innerHTML = "";
    text.innerHTML = "Ochre";
};

function colorSeafoam() {
    body.style.background = "#C9E1BE";
    text.innerHTML = "";
    text.innerHTML = "Seafoam";
};

function colorFuchsia() {
    body.style.background = "fuchsia";
    text.innerHTML = "";
    text.innerHTML = "Fuchsia";
};

function colorBlue() {
    body.style.background = "blue";
    text.innerHTML = "";
    text.innerHTML = "Blue";
};

function colorHome() {
    body.style.background = "gray";
    text.innerHTML = "";
    text.innerHTML = "Gray";
};

ochre.addEventListener('click', colorOchre);
seafoam.addEventListener('click', colorSeafoam);
fuchsia.addEventListener('click', colorFuchsia);
blue.addEventListener('click', colorBlue);
home.addEventListener('click', colorHome);

// toggling colors on keypress

document.addEventListener('keypress', (event) => {
    let name = event.key;
    if (name === '1') {
        colorOchre();
    } else if (name === '2') {
        colorSeafoam();
    } else if (name === '3') {
        colorFuchsia();
    } else if (name === '4') {
        colorBlue();
    } else if (name === '5') {
        colorHome();
    } else {
        return;
    }
});