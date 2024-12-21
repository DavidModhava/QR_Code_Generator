let input =document.getElementById('qr_input_provider')
let qrBtn=document.getElementById('qr_btn')   
let qrImg=document.getElementById('qr_img')
let qr_blk=document.querySelector('.qr_blk')

let preInput

qrBtn.onclick=function(){
    let inputValue=input.value.trim()

    if(!inputValue || inputValue===preInput){
        alert('Please Enter Some Name')
    }

    else{
        preInput=inputValue;
        qrBtn.innerText='Generating QR Code...';
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${preInput}`;
        qrImg.onload=function(){
            qrBtn.innerText='Generate QR Code'
            qr_blk.classList.add('active')
        }
    }
}

