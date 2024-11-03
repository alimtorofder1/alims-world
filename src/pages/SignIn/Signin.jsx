import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Signin = () => {

  const {SignIn}=useContext(AuthContext)

  const handleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    SignIn(email , password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  const [showPassword , setShowPassword]=useState(false);
    return (
      <div>
      <>
      <Helmet>
        <title>Login | Alim's World </title>
      </Helmet>
    </>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onClick={handleSignIn} className="card-body w-96">
        <div className="form-control">
        <h1 className="text-4xl text-pink-600 font-bold mb-8">Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered shadow-lg"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered shadow-lg"  />
          <span className="mx-72 -my-8 mb-7" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ? <IoMdEye /> : <IoMdEyeOff />
            }
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2 -mb-4">
          <button className="btn bg-pink-600 hover:bg-accent text-white">Login</button>
        </div>
      </form>
     <div className="mx-auto ">
          <label className="label">
            <p className="text-slate-400 -my-3 mb-4">Don't have an account ? <span className="text-pink-600 link "><Link to={'/signup'}>Create account</Link></span></p>
          </label>
     </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Signin;