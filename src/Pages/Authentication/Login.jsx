import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
     const {
    register,
     formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div> 
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body" >
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email")}  />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password" , { required: true, minLength: 6 })} />

          <div><a className="link link-hover">Forgot password?</a></div>

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
        </form>
      </div>
  )
}

export default Login