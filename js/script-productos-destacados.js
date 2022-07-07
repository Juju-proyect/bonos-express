
//MENU RESPONSIVO
document.getElementById("menu-icon").addEventListener("click", mostrar_menu);
document.getElementById("fondo_menu_negro").addEventListener("click", ocultar_menu);


menu = document.getElementById("menu2");
fondo_menu_negro = document.getElementById("fondo_menu_negro");

function mostrar_menu(){
    menu.style.right = "0px";
    fondo_menu_negro.style.display = "block";
}

function ocultar_menu(){
    menu.style.right = "-250px";
    fondo_menu_negro.style.display = "none";
}

//CARRUSEL PRODUCTOS

const carrusel = document.querySelector('.carrusel-cards');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1

const star = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = -1;
        } else if(carrusel.scrollLeft === 0) {
            step = 1;
        }
    }, 10);
}

const stop = () => {
    clearInterval(intervalo)
}

carrusel.addEventListener('mouseover', () => {
    stop();
})

carrusel.addEventListener('mouseout', () => {
    star();
})

star();