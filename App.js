import { cargarDepartamentos } from "./app/pre-carga.js"
import "./app/handlers.js";

export let signaturePad = null;


function initApplication() {
    cargarDepartamentos();
    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    signaturePad = new SignaturePad(canvas, {});
    document.getElementById("turistas").checked = true;

}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        initApplication();
    }
};