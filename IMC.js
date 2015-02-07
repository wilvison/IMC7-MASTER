/*metodo: calcularIMC*/
function calcularIMC() {
    var formulario = document.getElementById("formulario1");

    var kilos = +formulario1.kilos.value;
    var metros = +formulario1.metros.value;

    var altura = (metros * 100) /100;
    var imc = kilos / (altura * altura);
	
	msg1.value = document.getElementById("msg1").innerHTML = "<p class=center><span class=nota2>Seu IMC É: " + imc.toFixed(2) + "</span></p>";

if(imc < 17) {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Muito Abaixo do Peso</span></p><p class=center>Cuidado com o vento!</p><p>Se ele passar por você, lhe leva! Rsrs...</p>";
    } else if (imc >= 17 && imc < 18.49) {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Abaixo do Peso</span></p><p class=center>Cuidado! Você está ficando só pele e osso. Rsrs...</p>";
    } else if (imc > 18.49 && imc <= 24.99 ) {
		document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Peso Normal</span></p><p class=center>Muito bem! Você está Ótimo(a)!!! Rsrs...</p>";
    } else if (imc > 24.99 && imc <= 29.99 ) {
		document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Acima do Peso</span></p><p class=center>Opá! Luz amarela pra você!!!</p><p>Você precisa mudar seu hábito alimentar.</p>";
    } else if (imc > 29.99 && imc <= 34.99 ) {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Obesidade I</span></p><p class=center>Atenção! Você precisa se cuidar!!!</p>";
    } else if (imc > 34.99 && imc <= 39.99 ) {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Obesidade II (Severa)</span></p><p class=center>Atenção, luz Vermelha!</p><p>Você está precisa de aconpanhamento médico!!!</p>";
	}	else if (imc > 39.99) {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Obesidade III (Mórbida)</span></p><p class=center>Sua situação é delicada!</p><p>Você está precisa de ajuda médica!!!</p>";
    } else {
        document.getElementById("msg").innerHTML = "<p class=center><span class=nota>Digite seu peso e altura!</span></p><p class=center>Preste atenção meu filho!!! Rsrs</p>";
    }
}

function limpar() {
    var formulario = document.getElementById("formulario1");
	var lipakilos = formulario1.kilos.value="";
    var lipametros = formulario1.metros.value="";
}
