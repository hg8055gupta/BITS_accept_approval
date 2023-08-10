import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {login, google_login} from "../../api/auth";
import Button from '@mui/material/Button';
import Axios from 'axios'

import "./login.css";

function LoginPage(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);
//  const dispatch = useDispatch()
 const navigate = useNavigate();

 async function handleCallbackResponse(response) {
    console.log('response');

    // let userObj = jwt_decode(response.credential);
    let userObj = {credential:response.credential}


      localStorage.setItem('token','nkjnajksndjksandj')
      localStorage.setItem('email','teju@gmail.com')
      localStorage.setItem('name','Teju')
      localStorage.setItem('user_id','0562')

    // let resp = await google_login(userObj);
      
    // if(resp.status !== 200){
    //   console.log(resp.data)
    //   if(resp.data && resp.data.message){
    //     setErrorMessages({ name: "email", message: resp.data.message  });
    //   }else{
    //     setErrorMessages({ name: "email", message: "Internal server error"  });
    //   }

    // }else{
    //   console.log(resp.data);
    //   localStorage.setItem('token',resp.data.token)
    //   localStorage.setItem('email',resp.data.user.email)
    //   localStorage.setItem('name',resp.data.user.name)
    //   localStorage.setItem('user_id',resp.data.user._id)

    //   navigate('/chat')
    // }

    // if(userObj.email && userObj.name){
    //   console.log(userObj)
    //   let response = await google_login(userObj);
      
    //   if(response.status !== 200){
    //     console.log(response.data)
    //     // if(response.data && response.data.message){
    //     //   setErrorMessages({ name: "email", message: response.data.message  });
    //     // }else{
    //     //   setErrorMessages({ name: "email", message: "Internal server error"  });
    //     // }
          
    //   }else{
          
    //       // dispatch(signIn())
    //       console.log(response.data);
    //       // localStorage.setItem('token',response.data.token)
    //       // localStorage.setItem('email',response.data.user.email)
    //       // localStorage.setItem('user_id',response.data.user.user_id)

    //       // navigate('/usd-inr')
        
    //   }
    // }

    navigate('/approval')
  
}

useEffect(() => {
  /* global google */
  const client_id = process.env.REACT_APP_GLOGIN_CLIENT_ID;

  google.accounts.id.initialize({
    client_id:client_id,
    callback: handleCallbackResponse,
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline",size:"large", shape:'circle', type:'icon'}
  )
  
}, [])


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      {/* <form onSubmit={handleSubmit}>
      {renderErrorMessage("email")}
        <div style={{width:'100%'}} className="input-container">
          
          <input style={{width:'100%'}} type="email" placeholder="Email" name="email" required />
        
        </div>
        <div style={{width:'100%'}} className="input-container">
         
          <input type="password" placeholder="Password" name="pass" required />

        </div>
        <div className="button-container">
         
          <Button fullWidth type="submit" style={{"text-transform": "none"}} variant="contained">{loading?<CircularProgress
            size={25}
            sx={{
              color: 'white',
            }}
          />:'Login'}</Button>
         
        </div>
      </form> */}
      <div style={{textAlign:'center', margin:'10px 0'}} >
     {/* or */}
      </div>
      <div style={{display:'flex'}}>
      <div style={{margin:'auto'}} id="signInDiv"></div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        { renderForm}
      </div>
      {/* <Link to='/decibel-signup' className="signup">Sign up</Link> */}
    </div>
  );
}

export default LoginPage;
