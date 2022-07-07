
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

//MOSTRAR Y OCULTAR VENTA EMERGENTE DE FILTROS

document.getElementById("btn_open_filter").addEventListener("click", mostrar_filtros);
document.getElementById("btn_close_filter").addEventListener("click", ocultar_filtros);

mostrar = document.getElementById("ventana_filtros");
cerrar = document.getElementById("ventana_filtros");

function mostrar_filtros(){
    mostrar.style.display = "block";
}

function ocultar_filtros(){
    cerrar.style.display = "none";
}