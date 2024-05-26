const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodInput = document.querySelector("#qr-form input")
// Eventos
const qrCodeImg = document.querySelector("#qr-code img")

function generateQRCode(){
    const qrCodeInputValue = qrCodInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.innerHTML = "Gerando código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código Criado com Sucesso"
    })
}

qrCodeBtn.addEventListener("click", () => {
    generateQRCode();
})
qrCodInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter")
        generateQRCode()
})

qrCodInput.addEventListener("keyup", () => {
    if(!qrCodInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})