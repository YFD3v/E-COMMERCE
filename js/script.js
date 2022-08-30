// Abrir modal categorys
const categoriesIcone = document.getElementById('abrirModal');
const category = document.querySelector('.category-mobile');
const categoryIcone = document.querySelector('.category-mobile h3');

categoriesIcone.addEventListener('click', function() {
    abrirModalCategory();
})
categoryIcone.addEventListener('click', function() {
    fecharModalCategory();
})

function abrirModalCategory(){
    let modal = document.querySelector('.modal-category-mobile');
    category.style.display = "block";
    modal.style.display = "block";
    
}
function fecharModalCategory(){
    let modal = document.querySelector('.modal-category-mobile');
    category.style.display = "none";
    modal.style.display = "none";
}