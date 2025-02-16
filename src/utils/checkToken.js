import Cookies from "js-cookie";

const checkToken = ()=>{

    const token = Cookies.get("token");
    console.log("Token:", token);

    if (token) {
        return token;
    } else {
        console.log("Token not found!");
    }
}

export default checkToken