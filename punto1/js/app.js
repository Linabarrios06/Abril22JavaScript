// Obtener referencia al botón del contador y al botón de reinicio
const contadorBtn = document.getElementById("contadorBtn");
const resetBtn = document.getElementById("resetBtn");

// Variable para almacenar el contador
let contador = 0;

// Función para actualizar el texto del botón del contador
function actualizarContador() {
contadorBtn.textContent = contador;
}

// Función para incrementar el contador
function incrementarContador() {
contador++;
actualizarContador();
}

// Función para reiniciar el contador
function reiniciarContador() {
contador = 0;
actualizarContador();
}

// Agregar evento click al botón del contador para incrementar el contador
contadorBtn.addEventListener("click", incrementarContador);

// Agregar evento click al botón de reinicio para reiniciar el contador
resetBtn.addEventListener("click", reiniciarContador);

// Inicializar el texto del botón del contador
actualizarContador();