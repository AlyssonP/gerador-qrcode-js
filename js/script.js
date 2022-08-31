var msg = document.getElementById("msg")
var btn_gerar = document.getElementById("btn-gerar")
var cont_QrCode = document.getElementById("conteudo-qrcode")

btn_gerar.addEventListener("click", ()=>{
	let msg_qr = msg.value;
	if(!msg_qr) {
		alert("Digite uma mensagem")
	} else {
		cont_QrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${msg_qr}`
	}
})
