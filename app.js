document.getElementById("button").addEventListener("click",()=>{
    agregarComentario(document.getElementById("text").value);
});



const agregarComentario = text =>{
    
    let div = document.createElement("DIV")
    let comentario = document.createElement("P");
    div.classList.add("comentario");
    comentario.classList.add("p");
    comentario.innerHTML = text;
    div.appendChild(comentario);
    document.querySelector(".container__caja").appendChild(div);
    document.getElementById("text").value = "";
 
}