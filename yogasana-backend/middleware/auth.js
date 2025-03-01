const jwt = require("jsonwebtoken");

const authMW =  (req ,res ,next)=>{
   const token = req.headers["authorization"].split(" ")[1];

   try {
    if(!token){
      return res.status(401).json({ msg: "User Not Logged In" });
      }else{

        const decoded = jwt.verify(token, process.env.SECERT_KEY);
        req.body.userId = decoded.userId
        req.role = decoded.role
        
         next()
       
      }
   
    
   } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "User Not Logged In" });
   }
   
}

module.exports = authMW;