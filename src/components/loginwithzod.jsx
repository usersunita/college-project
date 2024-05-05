import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
// Define your Zod schema for login
const loginSchema = z.object({
  email: z.string().email({message:"email is required"}),
  password: z.string().min(1, 'Password is required'),
});

// Extract the type of your login schema
// type Tlogin = z.infer<typeof loginSchema>;

function LoginForm() {
  const { register, handleSubmit,formState:{errors}} = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  });

  const onSubmit = (data) => {
    console.log("data",data); // Here you can handle the form submission, e.g., send data to the server
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
