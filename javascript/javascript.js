function calc(e) {

	var operacao = e.value;
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var resposta = document.getElementById('resposta');
	var parImpar = document.getElementById('parImpar');

if ((isNaN(num1)) || (num1=="") || (num1==" "))
	alert("1º valor inválido!");
else if ((isNaN(num2)) || (num2=="") || (num2==" "))
alert("2º valor inválido!");
else {
	var calculo = eval(parseFloat(num1)+operacao+parseFloat(num2));
	resposta.value = calculo;
}

if ((calculo%2)==0)
	parImpar.value = "Par";
else
	parImpar.value = "Ímpar"; 

}

function divi() {

	var num1=document.getElementById("num1").value;
  	var num2=document.getElementById("num2").value;
   	var resposta = document.getElementById('resposta');
	var parImpar = document.getElementById('parImpar');

if (isNaN(num1) || (num1=="") || (num1==" ")) {
	alert("O 1º valor é inválido!");
   	document.getElementById('num1').value = "";
	resposta.value = "";
	parImpar.value="";
}else if (isNaN(num2) || (num2=="") || (num2==" ")) {
	alert("O 2º valor é inválido!");
	document.getElementById('num2').value = "";
	resposta.value = "";
	parImpar.value="";
}else if (parseFloat(num2)==0) {
	alert("O 2º valor não pode ser zero!");
	document.getElementById('num1').value = "";
	document.getElementById('num2').value = "";
	resposta.value = "";
	parImpar.value="";
}else {
   	var divi = parseFloat(num1) / parseFloat(num2) ;
  	resposta.value = divi;
}
if ((divi%2) == 0)
	parImpar.value = "Par";
else
	parImpar.value = "Ímpar";

}


function limpar() {
	document.getElementById('num1').value = "";
	document.getElementById('num2').value = "";
	document.getElementById('resposta').value = "";
	document.getElementById('parImpar').value = "";
	document.getElementById('firstName').focus();
}