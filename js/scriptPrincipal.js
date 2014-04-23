$(document).on("ready",configurarApp);

function configurarApp ()
{
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	dibujaFooter(canvas,ctx)
}
function dibujaFooter (canvas,contexto)
{
	contexto.fillStyle = "rgba(1, 89, 54, 0.5);";
	contexto.moveTo(0,0);
	contexto.quadraticCurveTo(0,-50,canvas.width-50,canvas.height-10)
	contexto.fill();

	// quadraticCurveTo(cpx,cpy,x,y);
}

