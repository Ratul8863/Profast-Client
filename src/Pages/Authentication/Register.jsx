import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import { Link } from 'react-router';
import GoogleLogin from './Social/GoogleLogin';

function Register() {
  
         const {
        register,
         formState: { errors },
        handleSubmit,
      } = useForm()


const {createuser} = useAuth();

    
      const onSubmit = (data) =>{

        console.log(data)
        createuser(data.email,data.password)
        .then((result) => {
console.log(result.user)
        })
        .catch(error => {

          console.log(error);
        })
        
      } 
  return (
    <div> 
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body" >
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email")}  />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password" , { required: true, minLength: 6 })} />
          {errors.password?.type === "required" && (
        <p role="alert" className='text-red-700'>Password name is required</p>
      )}

      {errors.password?.type === "minLength" && (
        <p role="alert" className='text-red-700'>MinLength 6 name is required</p>
      )}

          <div><a className="link link-hover">Forgot password?</a></div>

          <button className="btn text-black btn-secondary mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link to={'/login'} className='text-secondary btn btn-link p-0 border border-white h-fit'>Login</Link></p>
      </div>
        </form>
           <GoogleLogin></GoogleLogin>
</div>
    </div>
  )
}


export default Register