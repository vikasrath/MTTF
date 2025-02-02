import user from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";
import hashPassword from "@/utils/hashPassword.js";


const createUser = async ({ name, email, phone, orderId,password}) => {
  dbConnect();

  const hashedPassword = await hashPassword(password);
  
  try {
    const newUser = await user(
      {
        name: name,
        email: email,
        phone: phone,
        orderId: orderId,
        password: hashedPassword,
      }
    );

    newUser.save();

    return newUser;
  } catch (error) {
    console.log(error);

  }
}

export default createUser;