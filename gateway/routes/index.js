const httpProxy = require("express-http-proxy");

const customerServiceProxy = httpProxy("http://localhost:3001");
const productServiceProxy = httpProxy("http://localhost:3002");
const shoppingServiceProxy = httpProxy("http://localhost:3003");

const Routes = (app) => {
    
  app.post("/customer/register", (req, res) => {
    customerServiceProxy(req, res);
  });

  app.post("/customer/login", (req, res) => {
    customerServiceProxy(req, res);
  });

  app.post("/product/add", (req, res) => {
    productServiceProxy(req, res);
  });

  app.get("/product/get-products-list", (req, res) => {
    productServiceProxy(req, res);
  });

  app.post("/shopping/add", (req, res) => {
    shoppingServiceProxy(req, res);
  });
};

module.exports = Routes;
