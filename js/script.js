function ing() {
    //entrada 
    let ingresso = document.getElementById("ingresso").value;
    
    
    //processamento
    if (ingresso == "espectador") {
        valor = 80;        
    }
    else if (ingresso == "jogador"){
        valor = 100;
    }   
    

    //saída
    document.getElementById("total").value = valor
} 

function trocatema() {
     //entrada
     
    tema = document.getElementById("tema").value;

     //processamento
    

    if (tema == "fifa") {
        
        titulo = "Fifa 22";
        newFundo = "img/fifa22.jpg";
        cor = "Black";
    }
    else if (tema == "cod") {
        titulo = "Cod Black Ops 4";
        newFundo = "img/cod.jpeg";
        cor = "Black";
        
    }
    else if (tema == "ff"){
        titulo = "Free Fire"
        newFundo = "img/ff.jpg"
        cor = "Black"

    }    
    else if(tema == ""){
        titulo = "INSCRIÇÃO"
        newFundo = ""
        cor = ""

    }    
    //saída
    document.getElementById("titulo").value = titulo;
    document.body.style.backgroundImage = "url(" + newFundo + ")"       
    document.getElementById("titulo").style.color = cor
}

function add(valor,marcado) {
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}