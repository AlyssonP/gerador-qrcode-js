const container = document.querySelector(".container"),
msg = container.querySelector("#msg"),
btn_gerar = container.querySelector("#btn-gerar"),
cont_QrCode = container.querySelector("#conteudo-qrcode")

btn_gerar.addEventListener("click", ()=>{
	let msg_qr = msg.value;
	if(!msg_qr) {
		alert("Insira uma URL ou texto para gerar um Qr Code");
		return;
	}
	btn_gerar.innerText = "Gerando um Qr Code..."
	cont_QrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${msg_qr}`
	cont_QrCode.addEventListener("load", ()=>{
		btn_gerar.innerText = "Gerar Qr Code"
		container.classList.add("active")
	})
});

msg.addEventListener('keyup', () => {
    if(!msg.value){
        container.classList.remove('active');
    };
});
