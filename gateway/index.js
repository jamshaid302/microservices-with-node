const express = require('express');
const cors = require('cors');
require("dotenv").config();
const Routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('gateway is ready')
})

Routes(app);

// app.use('/customer', proxy('http://localhost:3001'));
// app.use('/product', proxy('http://localhost:3002'));
// app.use('/shopping', proxy('http://localhost:3003'));

app.listen(process.env.NODE_SERVER_PORT ,function () {
    console.log(`Gateway Listing at ${process.env.NODE_SERVER_PORT}`);
})




// const express = require('express');
// const app = express();

// // Endpoint for getting all users
// app.get('/users', async (req, res) => {
//   // Call the user service to get all users
//   const users = await fetch('http://user-service/users');
//   res.send(users);
// });

// // Endpoint for getting a specific user
// app.get('/users/:id', async (req, res) => {
//   // Call the user service to get a specific user
//   const user = await fetch(`http://user-service/users/${req.params.id}`);
//   res.send(user);
// });

// // Endpoint for getting all products
// app.get('/products', async (req, res) => {
//   // Call the product service to get all products
//   const products = await fetch('http://product-service/products');
//   res.send(products);
// });

// // Endpoint for getting a specific product
// app.get('/products/:id', async (req, res) => {
//   // Call the product service to get a specific product
//   const product = await fetch(`http://product-service/products/${req.params.id}`);
//   res.send(product);
// });

// app.listen(3000, () => {
//   console.log('API gateway started on port 3000');
// });