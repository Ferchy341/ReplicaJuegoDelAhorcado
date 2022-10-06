var palabras = ['ALURA', 'AHORCADO', 'ORACLE', 'HTML', 'CSS', 'JAVASCRIPT', 'LOGICA', 'PROGRAMACION', 'DESAFIO'];
var tablero = document.getElementById("horca").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 8;
let letrasIncorrectas = [];
let numeroDeErrores = 8;
let letraElegida = [];

function escogerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;
}

function dibujarTablero(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC";
    tablero.strokeStyle = "#0A3871";
    tablero.fillRect(0,0,1200,800);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho=600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length ; i++){
        tablero.moveTo(500+(ancho*i),640);
        tablero.lineTo(550+(ancho*i),640);
    }
    tablero.stroke();
    tablero.closePath();
}


function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#0A3871";

    var ancho=600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],505+(ancho*index),620);
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="#0A3871";
    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710,40);
}

function verificarLetraClicada(key){
    if (letras.length<1 || letras.indexOf(key)<0)
    {
        letras.push(key);
        return false;
    }
    else{
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores-=1;
    }
}



function verificarFinJuego(letra) {

    if(letraElegida.length < palabraSecreta.length) {
       letrasIncorrectas.push(letra);      
  
      
    if (letrasIncorrectas.length > numeroDeErrores) {
        perdiste();
      }
    else if(letraElegida.length < palabraSecreta.length) {
        adicionarLetraIncorrecta(letra);
        escribirLetraIncorrecta(letra, errores);
      }
    }
   }

function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
  
      ganaste();
      
    }
}

function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
}

function agregarPalabra() {
    document.getElementById("uno").style.display = 'none';
    document.getElementById("ing-palabra").style.display = "block";
  
}

function guardarPalabra() {
    let nuevaPalabra = document.getElementById("ingrese-palabra").value;
  
    if(nuevaPalabra !== ""){
      palabras.push(nuevaPalabra.toUpperCase());
      alert("La palabra fue guardada correctamente");     
    
      document.getElementById("ing-palabra").style.display = "none";
      iniciarJuego();
    }
    else{
      alert("Ninguna palabra ha sido Ingresada")
    }
}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    if(puntaje===8){
    //poste vertical
    tablero.moveTo(700,500)
    tablero.lineTo(700,100)
    }
    if(puntaje===7){//poste horizontal
    tablero.moveTo(850,100)
    tablero.lineTo(700,100)
    }
    if(puntaje===6){//cuerda
    tablero.moveTo(850,100)
    tablero.lineTo(850,171)
    }
    if(puntaje===5){//cabeza
    tablero.moveTo(900,230)
    tablero.arc(850,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//cuerpo
    tablero.moveTo(850,389)
    tablero.lineTo(850,289)
    }
    if(puntaje===3){//pierna izquierda
    tablero.moveTo(850,389)
    tablero.lineTo(800,450)
    }
    if(puntaje===2){//pierna derecha
    tablero.moveTo(850,389)
    tablero.lineTo(890,450)
    }
    if(puntaje===1){//mano izquierda
    tablero.moveTo(850,330)
    tablero.lineTo(800,389)
    }
    if(puntaje===0){//mano derecha
    tablero.moveTo(850,330)
    tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
  }
  
  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del juego!",930,320)
  }
  
  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste,",950,320)
    tablero.fillText("Felicidades!",930,360)
    setTimeout( recargar , 1000)
  }   
  
  function recargar(){
    location.reload(); 
  }