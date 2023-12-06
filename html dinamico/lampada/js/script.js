function ligar(){
    let imagem = document.getElementById("imgLampada");
    let localImg = imagem.src;
    let arquivo = localImg.substring(localImg.lastIndexOf('/')+1);   

    if(arquivo == "desligado.jpg") imagem.src = "img/ligado.jpg";
    else imagem.src = "img/desligado.jpg";
    

}