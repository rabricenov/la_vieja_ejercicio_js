let casillas = document.getElementsByClassName("casilla");

let equis0cero = "O";

let mensaje = "Gana la ";

let valor = "";

let contador = 0;

let gano = false;

function mensajeGanador(){

	gano = true;
	setTimeout(function(){alert(mensaje + valor), location.reload()}, 120);
}

function vieja(evento) {


	if (evento.target.innerHTML.length < 1) {
	    if (equis0cero === "O") {
	    	equis0cero = "X"
	    	evento.target.innerHTML = equis0cero;
	    	contador++;

	    } else{
	    	equis0cero = "O"
	    	evento.target.innerHTML = equis0cero;
	    	contador++;
	    	}

		let casilla1 = document.getElementById("casilla1").innerHTML;
		let casilla2 = document.getElementById("casilla2").innerHTML;
		let casilla3 = document.getElementById("casilla3").innerHTML;		
		let casilla4 = document.getElementById("casilla4").innerHTML;
		let casilla5 = document.getElementById("casilla5").innerHTML;
		let casilla6 = document.getElementById("casilla6").innerHTML;
		let casilla7 = document.getElementById("casilla7").innerHTML;
		let casilla8 = document.getElementById("casilla8").innerHTML;
		let casilla9 = document.getElementById("casilla9").innerHTML;

		if (casilla1 === casilla2 && casilla2 === casilla3 
			&& casilla3 === casilla4 && casilla4 === casilla5 
			&& casilla5 === casilla6 && casilla6 === casilla7 
			&& casilla7 === casilla8 && casilla8 === casilla9 && casilla9 === ""){}

			else {

				//tres casos de filas ganadoras

				if (casilla1 === casilla2 && casilla2 === casilla3 && casilla3 != "") {
					valor = casilla1;
					mensajeGanador();
				} 				
				if (casilla4 === casilla5 && casilla5 === casilla6 && casilla6 != "") {
					valor = casilla4;
					mensajeGanador();
				} 
				if (casilla7 === casilla8 && casilla8 === casilla9 && casilla9 != "") {		
					valor = casilla7;
					mensajeGanador();
				}

				//tres casos de columnas ganadoras

				if (casilla1 === casilla4 && casilla4 === casilla7 && casilla7 != "") {
					valor = casilla1;
					mensajeGanador();
				}				
				if (casilla2 === casilla5 && casilla5 === casilla8 && casilla8 != "") {
					valor = casilla2;
					mensajeGanador();
				}				
				if (casilla3 === casilla6 && casilla6 === casilla9 && casilla9 != "") {
					valor = casilla3;
					mensajeGanador();
				}

				//dos casos de diagonales ganadoras

				if (casilla1 === casilla5 && casilla5 === casilla9 && casilla9 != "") {
					valor = casilla1;
					mensajeGanador();
				}
				if (casilla3 === casilla5 && casilla5 === casilla7 && casilla7 != "") {
					valor = casilla3;
					mensajeGanador();
				}
			}

	} //cierre del primer if

	//cambio de color para X y O

	if (evento.target.innerHTML === "X") {
		evento.target.style.color = '#a93636'
	}else{
		evento.target.style.color = '#41a541'

	}



	//en caso de que sea un draw
	if (contador === 9 && gano === false) {
		setTimeout(function(){alert("DRAW"), location.reload()}, 120);
   	}

}; //cierre de función principal del juego

for (i = 0; i < 9; i++) {

	casillas[i].addEventListener("click", vieja);



}








