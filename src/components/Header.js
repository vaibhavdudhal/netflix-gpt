import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { BG, LOGO, pfp } from '../utils/constants';
const Header = () => {

  const dispatch=useDispatch();


    const navigate=useNavigate();
    const user=useSelector(store => store.user);
 
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.

         
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });

    }

       // for sign in and sign out
       useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
        
              const {uid , email , displayName , photoURL} = user;
               dispatch(addUser({uid :uid , email:email , displayName : displayName , photoURL : photoURL}));

               navigate("/browse");

              
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
             

            }
          });
          //unsubscribe when component unmounts
          return ()=> unsubscribe();
    } , []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
     <img className="m-4 w-44" src={LOGO} alt='Logo'></img>
    
    
      {user && (<div className='flex p-2 '>
        <img className='w-14 h-16 p-2 mt-3' alt="user-icon"
        src={pfp}></img>
        <button onClick={handleSignOut}
        className='text-white font-medium'>Sign Out</button>
        
        </div> )}


    </div>

  )
}

export default Header; 