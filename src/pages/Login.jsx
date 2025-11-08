import React, { useState,use } from "react";
import { Link,useNavigate } from "react-router";
import loginImg from "../assets/login.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

function Login() {
  const { signInWithGoogle,signInUser } = use(AuthContext);
    const [see, setSee] = useState(false);
     const navigate = useNavigate();

     const handleGoogle=()=>{
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful");

        // navigate(location?.state || "/");
        navigate("/");

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const  signinhandle =(e) =>{
  e.preventDefault();
const email = e.target.email.value;
const password =  e.target.password.value;
console.log(email,password)

signInUser(email,password)
.then(res => {
    const user = res.user;
    console.log(user);

    const stored = location.state || localStorage.getItem("store") || "/";
      localStorage.removeItem("store");
      console.log(stored);
      navigate(stored);

      toast.success("successfully login")
  })
 
  .catch(err => {
      const errmsg = err.message;
      toast(errmsg)
    })
}
   

  return (
    <div className="flex break-all justify-center items-center  min-h-screen">
    

      <div className="flex gap-5 ">
        <div>
          <img className="h-100 w-100" src={loginImg} alt="" />
        </div>

        <div className="card bg-red-300 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-red-700 text-2xl font-semibold">Please Login</h1>
        <div className="card-body text-orange-600">

          <form onSubmit={signinhandle}>
            <fieldset className="fieldset">


            <label className="label text-orange-800">Email</label>
            <input type="email" 
            // ref={refEmail} 
            name="email" className="input" placeholder="Email" required/>

              <div className="relative">
                            <label className="block text-orange-800 text-start">
                              Password
                            </label>

                            <input type={see? "text" : "password"}
                            name="password"
                            placeholder="password"
                            required
                            className="input"/>

                            <span onClick={()=>setSee(!see)}
                              className="absolute right-[20px] top-[33px] cursor-pointer z-2">
                                {see? <FaEye/> : <IoEyeOff/>}
                              </span>

                          </div>

              <button className="hover:underline cursor-pointer mt-2"
               type="button">Forget password?</button>

<button type="submit" className="btn  mt-2 btn-error">Login</button>

</fieldset>
          </form>

            <button onClick={handleGoogle}   className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p>First time in website? please {" "}
              <Link to="/register">
              <span className="text-blue-600">Register</span></Link>
            </p>
            
          
        </div>
      </div>
      </div>

    </div>
  )
}

export default Login;
