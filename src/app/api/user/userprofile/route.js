import { getDataFromToken } from "@/utils/getDataFromToken";

import User from "@/Model/user";
import { NextResponse } from "next/server";

export async function POST(req){

    

   try {
    console.log("hi")
    const userid =  await getDataFromToken(req);
    const user = await User.findOne({_id:userid}).select("-password")

    console.log("userdata:",user)

    return NextResponse.json({
        message:"user Found",
        data: user
    })
    
   } catch (error) {
    console.log("user found error",error)
   }

    






}