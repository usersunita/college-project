import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Define your Zod schema for login
const loginSchema = z.object({
  email: z.string().email({message:"email is required"}),
  password: z.string().min(1, 'Password is required'),
});

function LoginForm() {
  const { register, handleSubmit,formState:{errors}} = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  });

  const navigate = useNavigate(); 
  const onSubmit = (data) => {
    console.log("data",data); 
    navigate('/guide');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
