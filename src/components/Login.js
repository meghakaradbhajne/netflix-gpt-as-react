import Header from "./Header"
import { useState } from "react";
const Login = () => {
  const[IsSignInForm,setIsSignInForm] = useState();
  const toggleSignInForm = () => {
  setIsSignInForm(!IsSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
      alt="logo"
      />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"> 
      <h1 className="font-bold text-3xl py-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!IsSignInForm && (<input
         type="text"
         placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"/>
        )}
        <input
         type="text"
         placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"/>
      
        <input 
        type="Password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"/>
        <button className="py-4 my-6 bg-red-700 w-full">
          {IsSignInForm ? "Sign In" : "Sign Up"}
          </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm
         ? "Now to Netflix?Sign Up Now" 
        : "Allready register? Sign In Now "}</p>
      </form>
    </div>
  )
}

export default Login