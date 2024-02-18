import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignINForm , setSignInForm]=useState(false);

    const toggleForm=()=>{
        setSignInForm(!isSignINForm);

    }
  return (
    <div> 
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' ></img>

        </div>
        <form className=' absolute p-12  my-36   bg-black w-3/12 mx-auto right-0 left-0 pb-24 bg-opacity-85'>
          <h2 className='font-bold text-3xl py-4 text-white'>{ isSignINForm ? "Sign In" : "Sign Up"}</h2>  
          {!isSignINForm &&(<input type="text" placeholder="Name" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/> )}
        <input type="text" placeholder=" Email or Phone Number" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/>
        <input className='w-full p-4 my-4 bg-buttonbg' placeholder=' Password' type='password' />
        <button className='pointer mt-4 bg-red-700 p-4 w-full rounded-lg text-white'>{ isSignINForm ? "Sign In" : "Sign Up"}</button>
        
        {/* <div className='flex justify-content bg-gray-600' >
            <p className=''>Remember me</p>
            <p className='ml-24 mr-0 font-#b3b3b3'> Need help?</p>

        </div> */}

        <p className='py-4 text-color1 cursor-pointer' onClick={toggleForm}>

            {
                isSignINForm ? "New to Netflix? Sign up now."
                 : "Already Registered? Sign in now."
            }
           

        </p>
        </form>




    </div>
  )
}

export default  Login; 