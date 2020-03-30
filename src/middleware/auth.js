const jwt = require('jsonwebtoken');
const User = require('../models/user').User;

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'expressapp');
        
        const user = await User.findByPk(decoded.id);
   
        const tokens = await user.getTokens();
        
        if(!tokens.some(a=>a.name === token)){
            throw new Error
        }
        req.token = token 
        req.user = user 
        next()
    } catch (e) {
        res.status(401).send({error: 'Please autentificate'})
    }
}

module.exports = auth