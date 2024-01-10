import axios from "axios"


const token = localStorage.getItem('token')



const backend = "https://task8-back.onrender.com"


export const signUp =async(email,phone,name,password,profileImage,role)=>{
const send= await axios.post(`${backend}/signUp`,{email:email,phone:phone,name:name,password:password,profileImage:profileImage,role:role})
return send;
}


export const login =async(email,password)=>{
    console.log(email,password)
    const send= await axios.post(`${backend}/login`,{email:email,password:password,type:"user"})
    console.log(send.data)
    localStorage.setItem('token',send.data)
    return send;
    }



export const getData =async()=>{
console.log(token)

const data = await axios.post(`${backend}/data`,{token:token})

return data


    }



    export const updateData =async(data,id)=>{
      
     console.log(data,id)
        try{
            const token = localStorage.getItem('token')
            const up = await axios.put(`${backend}/update`,{email:data.email,password:data.password,name:data.name,phone:data.phone,token:token,userId:id},
            {
                headers:{"Content-Type":"application/json"},
                withCredentials:true
              
                })

            return up

        }catch(err){
            console.error(err)
        }


    }


    export const CheckAdmin =async()=>{

        try{
            const token = localStorage.getItem('token')
            const admin = await axios.post(`${backend}/check`,{token:token})

            return admin

        }catch(err){
            console.error(err)
        }


    }


    
    export const deleteA =async(id)=>{
        console.log(id)
       
        try{
            const admin = await axios.delete(`${backend}/delete?userId=${id}`,{
                data: { userId: id },
            })
          

            return admin

        }catch(err){
            console.error(err)
        }


    }