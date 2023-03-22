const jwt = require("jsonwebtoken");
require("dotenv").config();

const middleware = {
    async mustBeLoggedIn  (req,res,next) {
        try{
            let token = req.headers["x-access-token"] || req.headers.authorization || req.body.token;
            if (token && token.startsWith("Bearer ")) {
                // Remove Bearer from string
                token = token.slice(7, token.length).trimLeft();
            }
            let verifyToken = jwt.verify(token , process.env.JWT_SECRET || 'secret' )
            if(verifyToken){
                req.token = verifyToken
                next()
            }else{
                return 'Invalid User';
            }
        }catch (e){
            res.status(401).json({
                status: false,
                message: "User must be logged In"
            });
        }
    }
}

module.exports = middleware;