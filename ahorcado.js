let pantalla = document.querySelector("canvas");
let botonNuevoJuego = document.getElementById("nuevoJuego").style.display = "none";
let botonDesistirDesaparecer = document.getElementById("desistir").style.display = "none";
let IngresePalabra = document.getElementById("ing-palabra").style.display = "none";
let botonNuevoJgo = document.getElementById("nuevoJuego");
let botonDesistir = document.getElementById("desistir");
let botonCancelar = document.getElementById("cancelar");

document.getElementById("btn-iniciarjuego").onclick = () => {
  iniciarJuego();
}

document.getElementById("guardar").onclick = () => {
  guardarPalabra(); 
}

botonNuevoJgo.addEventListener("click", function () {
  location.reload();
});

botonDesistir.addEventListener("click", function () {
  location.reload();
});

botonCancelar.addEventListener("click", function () {
  location.reload();
});

function iniciarJuego() {
  document.getElementById("uno").style.display = 'none';
  dibujarTablero();
  escogerPalabraSecreta();
  dibujarLineas();
  botonNuevoJgo.style.display = "block";
  botonDesistir.style.display = "block";
  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (letrasIncorrectas.length <= numeroDeErrores) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        if (palabraSecreta.includes(letra)) {
          adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
          for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
              escribirLetraCorrecta(i);
              verificarVencedor(letra);

            }
          }

        }
        else {
          if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
          dibujarAhorcado(errores);
          verificarFinJuego(letra);
        }
      }
    }
    else {
      alert("Haz llegado al Límite de Letras Incorrectas")
    }

}
}




