function ing() {
    //entrada 
    let ingresso = document.formu.ingresso.value;

    //processamento
    if (ingresso == espec) {
        valor = 80
    }
    
    

    //saída
    document.getElementById("total").value = valor
} 

function trocatema() {
     //entrada
     
    tema = document.getElementById("tema").value;

     //processamento
    

    if (tema == "fifa") {
        
        titulo = "Fifa 22"
        newFundo = "img/fifa22.jpg"
    }

    //saída
    document.getElementById("titulo").value = titulo;
}