let cantidad = document.getElementById("cantidad");
let btnGenerador = document.getElementById("generar");
let btnlimpiar = document.getElementById("limpiar")
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje")

const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function iterandoContrasena(contrassena) {
    
if (!/[A-Z]/.test(contrassena)) {
        return false;
    }

      // Verifica si la contraseña tiene al menos una letra minúscula
if (!/[a-z]/.test(contrassena)) {
        return false;
    }

      // Verifica si la contraseña tiene al menos un número
if (!/[0-9]/.test(contrassena)) {
        return false;
    }
if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contrassena)) {
        return false;
    }

    return true;
 }


function generador() {
    numUsuario = parseInt(cantidad.value);
    if (numUsuario < 6) {
        alert("la cantidad de cracteres tiene que ser mayor a 6");
    }

    let contrasenaGenerada = "";

    for (let i= 0; i < numUsuario;i++) {
        let caracterAleatorio = caracteres[Math.floor(Math.random()*caracteres.length)];
        contrasenaGenerada += caracterAleatorio;
        if (iterandoContrasena(contrasenaGenerada)) {
            mensaje.textContent="la contraseña es fuerte"
        } else{
            mensaje.textContent= "la contraseña es debil"
        }
    }   
  
 contrasena.value = contrasenaGenerada;
 



};

function limpiarInput() {
    contrasena.value ="";
}










