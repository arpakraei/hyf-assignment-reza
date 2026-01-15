// Log to confirm the script is loaded
console.log("Script loaded");

// Get all available products
const products = getAvailableProducts();
console.log(products);

// Render products as a list on the page
function renderProducts(products) {

  // Create a <ul> element to hold the products
  const productList = document.createElement('ul');

  // Loop through each product
  for (const product of products) {

    // Create a <li> for one product
    const productRow = document.createElement('li');

    // Insert product details into the list item
    productRow.innerHTML = `
      <strong>${product.name}</strong>
      <div>Price: ${product.price}</div>
      <div>Rating: ${product.rating}</div>
    `;

    // Add the product row to the list
    productList.appendChild(productRow);
  }

  // Add the product list to the page
  document.body.appendChild(productList);
}

// Call the function to render products
renderProducts(products);
