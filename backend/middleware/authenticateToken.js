const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers('Authorization');

    if(!token){
        return res.status(401).json({ msg: 'Dostop zavrnjen'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(403).json({ msg: 'Neveljaven token'});
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;