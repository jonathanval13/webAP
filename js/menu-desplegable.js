function clickDesplegarMenu(){
    const menu = document.getElementById("menu");
    const img_menu =document.getElementById("img__menu");
    if(menu.style.visibility === "hidden"){
        menu.style.visibility ="visible" ;
        menu.style.opacity= "1";
        img_menu.src ="icons/close_black_24dp.svg";
    }else{
        menu.style.visibility = "hidden";
        menu.style.opacity= "0";
        img_menu.src ="icons/menu_black_24dp.svg";
    }
}
function menuProductos(){
    const menu = document.getElementById("menu__productos");
    if(menu.style.visibility === "hidden"){
        menu.style.visibility = "visible";
        menu.style.opacity= "1";
        menu.style.position="relative";
    }else{
        menu.style.visibility = "hidden";
        menu.style.opacity= "0";
        menu.style.position="absolute";
    }
}
