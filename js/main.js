import hamburgerMenu from "./hamburger.js";
import responsiveQueries from "./responsive.js";
import enlacesVendidos from "./enlaces-vendidos.js"
import darkMode from "./dark-mode.js";
import btnScroll from "./scroll-up.js";
const d = document;


d.addEventListener("DOMContentLoaded", e => {
    
    responsiveQueries("btn-menu", "img-menu", "(max-width: 767px)", "hidden");
    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-ul__item a", "active");
    enlacesVendidos(".taza-negra", ".taza-blanca", ".sobres-milco");
    darkMode(".btn-mode", "body", "dark-body");
    btnScroll(".scrollUp-btn")
    

})