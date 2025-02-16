import jwt from "jsonwebtoken";

export const getDataFromToken =  async (req) => {

   try {
    const token  =  req.cookies.get("token")?.value || ""

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

    console.log("token:",decodedToken);
    return decodedToken;

   } catch (error) {
    console.log("token decoded error:",error);
   }
  

  return token; 
};
