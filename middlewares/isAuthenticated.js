import jwt from "jsonwebtoken"
const isAuthenticated = async (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.json({message:"User not Authenticated"})
        }
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        if(!decode){
            return res.json({message:"Invalid Token"})
        }
        req.id = decode.userid
        next();
    } catch (error) {
        console.log(error)
    }
}
export default isAuthenticated;