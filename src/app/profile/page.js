import React from 'react'
import { cookies } from 'next/headers';






const  page = async ()=> {
  const token =  await cookies().get("token");
console.log("User Token:", token);

    if (!token) {
        return <div>Unauthorized</div>;
    }
  return (
    <div>page</div>
  )
}

export default page