import Axios from 'axios'

const loginUrl = "https://zx8sipvone.execute-api.ap-south-1.amazonaws.com/dev/login"
const apiUrl = process.env.REACT_APP_API_URL;
const googleLoginUrl = apiUrl+"/chat_pdf/login/"
const signupUrl = "https://zx8sipvone.execute-api.ap-south-1.amazonaws.com/dev/signup"

export const google_login = async (userData)=>{
    
    try{
  
        const response = await Axios.post(googleLoginUrl, userData)
  
        return response
            
    }catch(error){
        
            return error.response
    }  
   
  }

  export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };

export const login = async (userData)=>{
    
    try{
  
        const response = await Axios.post(loginUrl, userData)

        return response
            
    }catch(error){
        
            return error.response
    }  
   
}


export const signup = async (userData)=>{
    
    try{
        const headers = { 
            'x-api-key': process.env.REACT_APP_API_GATEWAY_KEY
        };
         const response = await Axios.post(signupUrl, userData, { headers })
         return response
            
    }catch(error){
        
            return error.response
    }  
   
}


  export const signout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  };