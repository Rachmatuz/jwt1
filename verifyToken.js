const jwt = require("jsonwebtoken")
const secretKey = "Eiser"
const verifyToken = (req,res,next)=>{
    const token = req.header("Authorization")?.split(" ")[1]
    if (!token){
        return res.status(401).json({pesan:"akses di tolak!!"})
    }
    try {
        const decode = jwt.verify(token,secretKey)
        req.user = decode
        next()
    }catch(error){
        return res.status(401).json({pesan:"token tidak valid!"})
    }
}


module.exports = verifyToken