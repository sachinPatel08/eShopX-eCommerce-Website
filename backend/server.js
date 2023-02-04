const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

dotenv.config();

const app = express();

// ROUTE GET ALL THE PRODUCTS
app.get('/api/products', (request, response) => {
  response.json(products);
});

// ROUTE GET SINGLE PRODUCT BY ID
app.get('/api/products/:id', (request, response) => {
  const product = products.find((product) => product._id === request.params.id);
  response.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER running on PORT ${PORT}`));
