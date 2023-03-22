const express = require('express');
const router = express.Router();
const CustomerService = require('../services/customer');
const middleware = require('../middleware/authorize');

router.post('/register',  async (req, res) => {
    try{
        const result = await CustomerService.addCustomer(req.body);
        if(result.errors) {
            return res.status(400).send(result.errors);
        }
        return res.status(201).send(result);
    }catch (e) {
        return e;
    }
})

router.post("/login", async(req, res) => {
    try{
        const result = await CustomerService.login(req.body);
        if(result.errors) {
            return res.status(400).send(result.errors);
        }
        return res.send({
            message: result.message,
            token: result.token,
        });
    }catch (e) {
        return e;
    }
});

module.exports=router;