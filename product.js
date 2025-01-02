
// Sélectionner tous les boutons de catégorie et les produits
const categoryButtons = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product');

function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter:checked')).map(cb => cb.value);
    
    document.querySelectorAll('.product').forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


const products = document.querySelector("#products"); // sélectionner tous les éléments HTML 
const productLinks = document.querySelector("section div"); // représenter les liens des products  

// sélectionner tous les éléments HTML représentant des projets 
document.querySelectorAll('.product_type').forEach(product_type => {  
    product_type.addEventListener('click', () => {  
        const id = product_type.dataset.id; // accéder à data-id de HTML  
    });
});
