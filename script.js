document.addEventListener('DOMContentLoaded', function() {
    // The API URL
    const apiUrl = 'https://fakestoreapi.com/products'; // A mock API for testing

    // Function to fetch products
    function loadProducts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayProducts(data);  // Call function to display products
            })
            .catch(error => {
                console.error('Error loading products:', error);
            });
    }

    // Function to display products in the grid
    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');
        
        // Loop through products and create HTML for each
        const productRows = [];
        let row = '';
        products.forEach((product, index) => {
            // Start new row every 3 products
            if (index % 3 === 0 && index > 0) {
                productRows.push(`<div class="product-row">${row}</div>`);
                row = '';
            }

            row += `
                <div class="product">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <div class="price">$${product.price}</div>
                    </div>
                </div>
            `;
        });
        
        // Push the last row
        productRows.push(`<div class="product-row">${row}</div>`);
        
        // Append all rows to the product container
        productContainer.innerHTML = productRows.join('');
    }

    // Call the loadProducts function when the page is ready
    loadProducts();
});
