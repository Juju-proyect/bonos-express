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

//GALERIA DE IMAGENES

document.getElementById("imagen_miniatura_principal_1").addEventListener("click", mostrar_imagen_1);

imagen1 = document.getElementById("imagen_principal_1");
imagen2 = document.getElementById("imagen_principal_2");
imagen3 = document.getElementById("imagen_principal_3");
imagen4 = document.getElementById("imagen_principal_4");
imagen5 = document.getElementById("imagen_principal_5");


function mostrar_imagen_1(){
    imagen1.style.display = "block";
    imagen2.style.display = "none";
    imagen3.style.display = "none";
    imagen4.style.display = "none";
    imagen5.style.display = "none";
}

document.getElementById("imagen_miniatura_principal_2").addEventListener("click", mostrar_imagen_2);

imagen1 = document.getElementById("imagen_principal_1");
imagen2 = document.getElementById("imagen_principal_2");
imagen3 = document.getElementById("imagen_principal_3");
imagen4 = document.getElementById("imagen_principal_4");
imagen5 = document.getElementById("imagen_principal_5");


function mostrar_imagen_2(){
    imagen1.style.display = "none";
    imagen2.style.display = "block";
    imagen3.style.display = "none";
    imagen4.style.display = "none";
    imagen5.style.display = "none";
}

document.getElementById("imagen_miniatura_principal_3").addEventListener("click", mostrar_imagen_3);

imagen1 = document.getElementById("imagen_principal_1");
imagen2 = document.getElementById("imagen_principal_2");
imagen3 = document.getElementById("imagen_principal_3");
imagen4 = document.getElementById("imagen_principal_4");
imagen5 = document.getElementById("imagen_principal_5");


function mostrar_imagen_3(){
    imagen1.style.display = "none";
    imagen2.style.display = "none";
    imagen3.style.display = "block";
    imagen4.style.display = "none";
    imagen5.style.display = "none";
}

document.getElementById("imagen_miniatura_principal_4").addEventListener("click", mostrar_imagen_4);

imagen1 = document.getElementById("imagen_principal_1");
imagen2 = document.getElementById("imagen_principal_2");
imagen3 = document.getElementById("imagen_principal_3");
imagen4 = document.getElementById("imagen_principal_4");
imagen5 = document.getElementById("imagen_principal_5");


function mostrar_imagen_4(){
    imagen1.style.display = "none";
    imagen2.style.display = "none";
    imagen3.style.display = "none";
    imagen4.style.display = "block";
    imagen5.style.display = "none";
}

document.getElementById("imagen_miniatura_principal_5").addEventListener("click", mostrar_imagen_5);

imagen1 = document.getElementById("imagen_principal_1");
imagen2 = document.getElementById("imagen_principal_2");
imagen3 = document.getElementById("imagen_principal_3");
imagen4 = document.getElementById("imagen_principal_4");
imagen5 = document.getElementById("imagen_principal_5");


function mostrar_imagen_5(){
    imagen1.style.display = "none";
    imagen2.style.display = "none";
    imagen3.style.display = "none";
    imagen4.style.display = "none";
    imagen5.style.display = "block";
}

