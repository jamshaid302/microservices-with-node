const CustomerModel = require("../models/customerModel");
const hash = require("../utility/hashing");
const bcrypt = require("bcrypt");
const conn = require("../utility/conn");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const CustomerService = {
  async addCustomer(data) {
    try {
      const hashedPassword = await hash.generateHash(data.password);
      data.password = hashedPassword;
      const newCustomer = new CustomerModel({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      let result = await newCustomer.save();
      return {
        message: "Customer added successfully",
        customer: result._doc,
      };
    } catch (err) {
      return err;
    }
  },

  async login(data) {
    try {
      let customer = await CustomerModel.findOne({ email: data.email });
      if (!customer) {
        return {
          errors: [
            {
              msg: "Invalid email",
            },
          ],
        };
      }
      let isMatch = await bcrypt.compare(data.password, customer.password);
      if (!isMatch) {
        return {
          errors: [
            {
              msg: "Invalid password",
            },
          ],
        };
      }
      const accessToken = jwt.sign(
        { customerId: customer._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return {
        message: "Login successful",
        token: accessToken,
      };
    } catch (err) {
      return err;
    }
  },
};

module.exports = CustomerService;
