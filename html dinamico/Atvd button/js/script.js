let lampada = document.getElementById('lampada');

let luz = 'off'

function acender(){
if (luz == 'on'){
    lampada.style.backgroundColor = "white"
    luz = 'off'
}
else {
    lampada.style.backgroundColor = "black"
    luz = 'on'
}
}