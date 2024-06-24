
// import { zodResolver } from '@hookform/resolvers/zod';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from "zod";
// import './login.css'; 
// import { useNavigate } from 'react-router-dom';
// import Session from 'react-session-api';

// const loginSchema = z.object({
//   email: z.string().email({ message: "Email is required" }),
//   password: z.string().min(1, 'Password is required'),
// });

// function LoginForm({ onClose }) { 
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: ""
//     }
//   });

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch('http://localhost/php%20backend/login.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         Session.set("user_id", result.user_id);
//         console.log('Success:', result);
//         if(result.role ==='admin'){
//           navigate('/admin');
//         }else if(result.role === 'guide'){
//           navigate('/guide');
//         }else if (result.role === 'client'){
//           navigate('/guides');
//         }
//       } else {
//         console.error('Error:', result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="login-form-overlay">
//       <div className="login-form-container">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1>Login</h1>
//           <div>
//             <label>Email</label>
//             <input
//               type="text"
//               {...register('email')}
//             />
//             {errors.email && <p className="error">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               {...register('password')}
//             />
//             {errors.password && <p className="error">{errors.password.message}</p>}
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import './login.css'; 
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api';

const loginSchema = z.object({
  email: z.string().nonempty({ message: "Email is required" }).email({ message: "Invalid email format" }),
  password: z.string().nonempty({ message: "Password is required" }).min(6, 'Password must be at least 6 characters long'),
});

function LoginForm({ onClose }) { 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost/php%20backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Session.set("user_id", result.user_id);
        console.log('Success:', result);
        if(result.role ==='admin'){
          navigate('/admin');
        } else if(result.role === 'guide'){
          navigate('/guide');
        } else if (result.role === 'client'){
          navigate('/guides');
        }
      } else {
        setServerError(result.message || "Invalid email or password");
        console.error('Error:', result.message);
      }
    } catch (error) {
      setServerError("An error occurred. Please try again.");
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-form-overlay">
      <div className="login-form-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="text"
              {...register('email')}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              {...register('password')}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          {serverError && <p className="error">{serverError}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

