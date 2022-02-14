let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let asssunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")


nome.style.width = "100%"

email.style.width = "100%"


function validaNome() {
    let txt = document.querySelector("#txtNome")
       if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!!"
        txt.style.color = "red"

       } else {
        txtNome.innerHTML = "Nome Válido!!"
        txtNome.style.color = "green"
        nomeOK = true

       }


}


function validaEmail(){


    let txtEmail = document.querySelector("#txtEmail")

     if (email.value.indexOf("@") == -1|| email.value.indexOf(".") == -1 ){

        txtEmail.innerHTML = "E-mail Inválido!!" 
        txtEmail.color = "red"
    } else{
        txtEmail.innerHTML = "Email Válido!!"
        txtEmail.style.color = "green"
        emailOK = true
    }
    
}

function validaAssunto() { 

    let txtAssunto = document.querySelector("#txtAssunto")

    if (asssunto.value.length >= 100){
        txtAssunto.innerHTML = "Seu texto é muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.Color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOK = true


    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
  
        alert ("Formulario enviado com sucesso!!")
   
    } else {
        alert ("Preencha o formulario corretamente antes de enviar...")

    }
    

}

function mapaZoom() { 

   mapa.style.width = "700px"
   mapa.style.height = "600px"


}

function mapaNormal()  {

    mapa.style.width = "600px"
    mapa.style.height = "450px"

   

}


     
  
