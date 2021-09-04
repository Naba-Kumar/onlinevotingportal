const jwt = require("jsonwebtoken");
const userSchema = require("../models/userSchema")



const UserAuthenticate = async(req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken =jwt.verify(token, process.env.SECRET_KEY)
        const citizen = await userSchema.citizen.findOne({_id:verifyToken._id, "tokens.token":token})
        console.log("USER LOGIN")

        if(!citizen){
            throw new Error("User not found")
        }

        req.token = token;
        req.citizen = citizen;
        req.userID = citizen._id; 

        next()
    }
    catch(e){
        res.status(401).send('Unauthorized: NO token')
        console.log(e)

    }
}

module.exports.UserAuthenticate = UserAuthenticate



const AdminAuthenticate = async(req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        console.log("....................................................")
        console.log(token)
        console.log("....................................................")
        const verifyToken =jwt.verify(token, process.env.SECRET_KEY)
        const admin = await userSchema.admin.findOne({_id:verifyToken._id, "tokens.token":token})

        if(!admin){
            throw new Error("User not found")
        }

        req.token = token;
        req.admin = admin;
        req.userID = admin._id; 

        next()
    }
    catch(e){
        res.status(401).send('Unauthorized: NO token')
        console.log(e)

    }
}

module.exports.AdminAuthenticate = AdminAuthenticate





const checkAuthenticate = async(req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken =jwt.verify(token, process.env.SECRET_KEY)
        const user = await userSchema.citizenapllication.findOne({_id:verifyToken._id, "tokens.token":token})
        console.log("USER LOGIN")

        if(!user){
            throw new Error("User not found")
        }

        req.token = token;
        req.user = user;
        req.userID = user._id; 

        next()
    }
    catch(e){
        res.status(401).send('Unauthorized: NO token')
        console.log(e)

    }
}

module.exports.checkAuthenticate = checkAuthenticate


