const express = require('express');
const app = express();
const port = 8080;

const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/cart.router');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

