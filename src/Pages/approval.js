import BitsLogo from '../images/IPC-Logo.jpeg'
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Profile from '../components/Profile'

const registerUrl = "http://localhost:8000/api/add-approval-data"


export default function Approval() {


  const [capture,setCapture] = useState(false)
  const [data,setData] = useState([]);

  const [values, setValues] = useState({
    visitor_name:'',
    visitor_mobile:'',
    purpose:'',
    coming_from_city:'',
    visitor_relation:'',
    visitor_email:'',
    accompanied_persons:'',
    requesting_to:'',
    department:'',
    post:'',
    error: false,
    success: false
  });

  useEffect(() => {
    Axios.get('http://localhost:8000/api/find-approval-data')
    .then(response => {
      const data = response.data;
      console.log(data)
      setData(data.docs);
      // do something with the data returned by the API
    })
    .catch(error => {
      console.error('Error fetching approval data:', error);
    });
  }, []);


  const removeItem = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };
 

  const handleSubmit = async (event)=>{
    event.preventDefault();
  
    try{

   

    let response
    try {
   
      // response = await Axios.post(registerUrl, data);
      // console.log(response)
      // setValues({visitor_name:'',
      // visitor_mobile:'',
      // purpose:'',
      // coming_from_city:'',
      // visitor_relation:'',
      // visitor_email:'',
      // accompanied_persons:'',
      // requesting_to:'',
      // department:'',
      // post:'',
      // error: false,
      // success: 'Form submitted succesfully'})
    
    } catch (error) {

      // setValues({...values,error:'server error'})

    }
       
 
        return response
            
    }catch(error){
      console.log(error)
            return error.response
    }  
   
  }

 function renderCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    
      {data?data.map((doc, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid gray' }}>
          {console.log(data)}
          <h4>{doc.visitor_name}</h4>
          <p>Mobile: {doc.visitor_mobile}</p>
          <p>Purpose: {doc.purpose}</p>
          <p>Coming from: {doc.coming_from_city}</p>
          <p>Relation: {doc.visitor_relation}</p>
          <p>Email: {doc.visitor_email}</p>
          <p>Accompanied persons: {doc.accompanied_persons}</p>
          <p>Requesting to: {doc.requesting_to}</p>
          <p>Department: {doc.department}</p>
          <p>Post: {doc.post}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={()=>removeItem(index)} style={{ background: 'green', color: 'white', padding: '5px', border: 'none', borderRadius: '5px', cursor:'pointer' }}>Approve</button>
            <button onClick={()=>removeItem(index)} style={{ background: 'red', color: 'white', padding: '5px', border: 'none', borderRadius: '5px', cursor:'pointer' }}>Decline</button>
          </div>
        </div>
      )):''}
    </div>
  );
}




  return (
    <div className="App">
      <div>
        <div className='logo-wrapper'>
        
          <img src={BitsLogo}/>
      
        </div>
        <div style={{display:'flex',marginTop:'2em',justifyContent:'flex-end'}}>
        <div style={{backgroundColor:'#faca2c',height:'6px',width:'12%'}}>
          
          </div>
          <div style={{backgroundColor:'#6cbfe7',height:'6px',width:'12%'}}>
          
          </div>
          <div style={{backgroundColor:'#ed1c24',height:'6px',width:'12%'}}>
          
          </div>
        </div>
        <div style={{backgroundColor:'grey',height:'1px',width:'100%'}}></div>
        <div style={{ width:'80%', margin:'1em auto', color:'#211d70', fontWeight:'bold', fontSize:'22px'}}>BITS Pilani :: Entry/Exit Approval Portal</div>
      

        <div style={{width:"60%",margin:'auto'}}>
         {data && renderCards()}
        </div>
        <div style={{display:'flex',marginTop:'2em',justifyContent:'flex-start'}}>
        <div style={{backgroundColor:'#faca2c',height:'6px',width:'12%'}}>
          
          </div>
          <div style={{backgroundColor:'#6cbfe7',height:'6px',width:'12%'}}>
          
          </div>
          <div style={{backgroundColor:'#ed1c24',height:'6px',width:'12%'}}>
          
          </div>
         
        </div>
        <div style={{backgroundColor:'grey',height:'1px',width:'100%'}}></div>
      </div>

    </div>
  );
}

