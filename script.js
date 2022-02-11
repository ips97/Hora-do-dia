function carregar(){
var msg = document.getElementById(`msg`)
var img = document.getElementById(`imagem`)
var data = new Date();
var hora = data.getHours();
//var hora = 13;

msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0 && hora <12){
     //Bom Dia
     img.src = `images/manha.png`
     document.body.style.background = `#624b3d`
 }
 else if (hora >=12 && hora < 18){
     //Boa tarde
     img.src = `images/tarde.png`
     document.body.style.background = `#612e11`
 }
 else{
     //Boa noite
     img.src = `images/noite.png`
     document.body.style.background = `#5d3f63`

 }
}