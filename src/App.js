


import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import LoginPage from "./Pages/Login/Login";
import ApprovalPage from "./Pages/approval";
import PrivateRoute from "./PrivateRoute"
// import Axios from 'axios'

function App() {
  // const {width,height}=getWindowDimensions()

  // const isLoggedIn=useSelector(state=>state.isLoggedIn)


  return (
   <>

   {/* {width<900?<SideDrawer/>:<HeaderNav/>} */}
   <div className='App'>
    <BrowserRouter >
      <Routes >
       
        <Route path="/approval" element={<PrivateRoute><ApprovalPage/></PrivateRoute>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="/" element={<PrivateRoute><ApprovalPage/></PrivateRoute>} /> */}
        <Route path="/" element={<PrivateRoute><ApprovalPage/></PrivateRoute>} />

        </Routes>
  </BrowserRouter>
  </div>
 
  </>
  );
}

export default App;

