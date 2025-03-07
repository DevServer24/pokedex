import { useState,useEffect } from "react"
import axios from "axios"
import { redirect } from "react-router-dom";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
        <div className="">
          <div className="sign-body flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Pokedex</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">Welcome Back</p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className='p-4'>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className='p-4'>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>       
        </div>
    )
}

export default SignIn