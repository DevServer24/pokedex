import { useState,useEffect } from "react"
import axios from "axios"
import { redirect } from "react-router-dom";
const SignIn = () =>{
    const [data,setData] = useState({
        email:'',password:''
    })
    const [error,setError] = useState(null);

    const handleChange = (e) =>{
        setData({
            ...data,[e.target.name]:e.target.value,
        });
    };





   










    const handleSubmit =  async (e) =>{
        e.preventDefault();
        if(!data.email || data.password){
            setError('All Fields are required');
            return;
        }
        try {
            const response = await axios.post(urlApi,data);
            if(response.status === 200){
                redirect('/')
            } 
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <div>
            
        </div>
    )
}