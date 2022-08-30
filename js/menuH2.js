const icone = document.querySelector('.mobile i');

icone.addEventListener('click', ()=>{
    if(icone.className == "fa-solid fa-bars"){
        icone.style.color = "black";
        icone.className = "fa-solid fa-xmark";
    }else if(icone.className == "fa-solid fa-xmark"){
        icone.style.color = "black";
        icone.className = "fa-solid fa-bars";
    }   
})

/*CATEGORIAS*/


