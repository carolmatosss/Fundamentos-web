//!Declarar variaveis

//var nome='carol' //Variavel de escopo global

//let nome2= 'carol' //Não permite redeclarar variavel //Variavel de escopo local/global

//const nome3= 'carol'

//Inferência de tipagem - var pode receber qualquer coisa


//! Acessar elementos na tela criados no html
//document.getElementById('botão') //Pega o elemento de acordo com o Id
//document.getElementsByClassName('botao') //Pega todos os elementos com a mesma classe

let nome = window.document.getElementById('nome')
let email =document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk =false
let emailOk =false
let assuntoOk =false
let mapa= document.querySelector('#mapa')


nome.style.width= '100%'
email.style.width= '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML= 'Nome inválido'
       txtNome.style.color= 'red'
    }else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color ='green'
    nomeOk=true
    }
}

function validaEmail(){
     let txtEmail = document.querySelector('#txtEmail')

     if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
     {
        txtEmail.innerHTML= 'E-mail inválido'
        txtEmail.style.color='red'
     } else {
        txtEmail.innerHTML= 'E-mail válido'
        txtEmail.style.color='green'
        emailOk=true
     }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML='Texto maior que 100 caracteres'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display= 'block'
    }else
    txtAssunto.style.display= 'none'
    assuntoOk=true
}


function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado')
    }else{
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'

}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='250px'

}