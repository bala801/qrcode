const frm = document.querySelector("#frm");
const output=document.querySelector(".output");
const spinner=document.querySelector("#loading");
const qrcodeElement =document.querySelector("#qrcode");
const btnsave =document.querySelector("#btn-save");
function generateQRCode(e){
    e.preventDefault()
    const url=document.querySelector("#url").value;
    const size=document.querySelector("#size").value;
    const colorDart=document.querySelector("#colorDart").value;
    const colorLight=document.querySelector("#colorLight").value;

    if(url==""){
        alert("plase Enter a URL")
    }else{
        // Show Spinner
        spinner.style.display="flex";

        setTimeout(()=>{

            // Hide Spinner
            spinner.style.display="none";
            qrcodeElement.innerHTML="";


            const qrcode = new QRCode('qrcode',{
                text:url,
                width: size,
	            height: size,
	            colorDark : colorDart,
	            colorLight : colorLight,
                correctLevel : QRCode.CorrectLevel.H
            })
        },1000);

        createDownloadLink()

    }
}

frm.addEventListener('submit',generateQRCode);

function createDownloadLink(){
    const imgsrc=qrcodeElement.querySelector('img').src;
    btnsave.href=imgsrc;
}

btnsave.addEventListener('click',()=>{
    setTimeout(() => {
        btnsave.download='qrcode';
    }, 50);

})