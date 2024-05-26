import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'
import UploadPhoto from './UploadPhoto';
import { object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [name,setName]=useState("");
  const [link,setLink]=useState("");
  const [description,setDescription]=useState("");
  const navigate=useNavigate();

  const checkValidation=async(name,link,description)=>{
    let userSchema = object({
      name: string().required(),
      link: string().url().required(),
      description: string().required()
    });
    try {
      const user = await userSchema.validate({name:name,link:link,description:description});
      return user
    } catch (error) {
      toast(error.message)
    }
  
    
  }
  const handleSubmit=async()=>{
   const fetchData=async()=>{
    try{
    const response=await fetch(`https://media-content.ccbp.in/website/react-assignment/add_resource.json`,{
      method:"GET"      
    });
    // const resp=await response.json();
    console.log("respon",response)
    if(response.status===200){

      toast("Insert successfully");
      setName("");
      setLink("");
      setDescription("");
    }
    } catch (error) {
      toast(error.message)
    }
   }
      const validation =await checkValidation(name,link,description)
    if (validation){
    fetchData()
    }
  }
  const goBack=()=>{
    navigate(-1)
  }
  

  return (
    <div className='formContainer'>
      <div>
      <button className='userButton' onClick={goBack} > &lt; User </button>
      </div>
      <div><ToastContainer /></div>
      <div className='form'>
        <h3 > Add a Resource</h3>
        <div className='element'>
        <label >NAME</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Ashoka Tano'/>
        </div>
        <div className='element'>
        <label >LINK</label>
        <input type='text' value={link} onChange={(e)=>setLink(e.target.value)} placeholder='https://www.abc.com'/>
        </div >
        <div className='element '>
        <label >DESCRIPTION</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className='textarea' placeholder='Ex building a new connectivity for the team'/>
        </div>
        <div className='element'>
            <UploadPhoto />
        </div>
        <div><button className='createButton' type='submit' onClick={handleSubmit}>Create</button></div>

      </div>

    </div>
  )
}

export default Form;
