import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../../index.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value, // Dynamically update the correct field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!data.email || !data.name || !data.password) {
      setError("All fields are required.");
      return;
    }

    try {

      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Signup failed");

      alert("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-body flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">Welcome to Pokémon World!</p>

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
              <Label className='p-4'>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
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
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
