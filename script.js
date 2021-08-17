function verificar(){

var hora = document.querySelector('input#relogio')
var button = document.querySelector('#verificar')
var imagem = document.querySelector('img#ceu')

var time1='00:00'
var time2='05:00'
var time3='08:00'
var time4='17:00'
var time5='19:00'

if (hora.value < time2){
    imagem.src = 'imagens/madrugada.jpg'
    document.body.style.background = '#0d0229' 
}
else if(hora.value < time3){
    imagem.src = 'imagens/manha.jpg'
    document.body.style.background = '#b46b0b' 
}
else if(hora.value < time4){
    imagem.src = 'imagens/dia.jpg'
    document.body.style.background ='#107299'

}
else if(hora.value < time5){
    imagem.src = 'imagens/pordosol.jpg'
    document.body.style.background ='#b33c27'
}
else if(hora.value >= time5){
    imagem.src = 'imagens/noite.jpg'
    document.body.style.background = '#050e44'
}

}
