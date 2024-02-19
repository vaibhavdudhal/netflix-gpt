import React, { useState , useRef  } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignINForm , setSignInForm]=useState(false);
    const [errorMessage , seterrorMessage]=useState(null);

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();



    let message;
    const handleButtonClick = () => {
        
        if (isSignINForm) {
          message = checkValidData(null ,email.current.value, password.current.value, false);
        } else {
          message = checkValidData(name.current.value, email.current.value, password.current.value, true);
        }
        seterrorMessage(message);

        if(message) return;

        if(!isSignINForm)
        {

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
         const user = userCredential.user;
        updateProfile(user , {
            displayName: name.current.value, photoURL: "https://pbs.twimg.com/profile_images/1752200299144699904/umhiFxUI_400x400.jpg"
          }).then(() => {
            // Profile updated!
            const {uid , email , displayName , photoURL} = auth.currentUser;
            dispatch(addUser({uid :uid , email:email , displayName : displayName , photoURL : photoURL}));
            
            navigate("/browse")
          }).catch((error) => {
            seterrorMessage(error.message);
          });



        console.log(user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode +"-"+errorMessage);
        // ..
      });
    }

      else  {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-" +errorMessage);
  });

      }
    

      
    
      
    }
      

   
  

   

  const toggleForm=()=>{
    setSignInForm(!isSignINForm);

}

  return (
    <div> 
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' ></img>

        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' absolute p-12  my-36   bg-black w-3/12 mx-auto right-0 left-0 pb-24 bg-opacity-85'>
          <h2 className='font-bold text-3xl py-4 text-white'>{ isSignINForm ? "Sign In" : "Sign Up"}</h2>  
          {!isSignINForm &&(<input ref={name} type="text" placeholder="Name" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/> )}
        <input ref={email} type="text" placeholder=" Email" className='w-full p-4 my-4 bg-[#333] text-[#8c8c8c]'/>
        <input  ref={password} className='w-full p-4 my-4 bg-buttonbg' placeholder=' Password' type='password' />

        <p className='text-red-700 font-medium '>{errorMessage}</p>
        <button onClick={handleButtonClick} className='pointer mt-4 bg-red-700 p-4 w-full rounded-lg text-white'>{ isSignINForm ? "Sign In" : "Sign Up"} </button>
  


        <p className='py-4 text-color1 cursor-pointer' onClick={toggleForm}>

            {
                isSignINForm ? "New to Netflix? Sign up now."
                 : "Already Registered? Login now."
            }
           

        </p>
        </form>




    </div>
  )
}

export default  Login; 