import { navBar } from "./navBar.js";
import { likesCounter } from "./likes.js";
import { toogleDescription } from "./infoProd.js";
import { availability } from "./disponibilidad.js";

document.addEventListener("DOMContentLoaded", () => {
    navBar(); //Aquí mandamos a llamar a mis funciones
    likesCounter(); //Aquí mandamos a llamar a la función de likes
    toogleDescription();
    availability();
});