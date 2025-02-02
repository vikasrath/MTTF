import bcrypt from 'bcryptjs';

const hashPassword = async (password) =>{

    try {
        
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }

}

export default hashPassword;
