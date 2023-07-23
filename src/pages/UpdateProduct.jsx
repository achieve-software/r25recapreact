import React from 'react'
import { useLocation } from "react-router-dom";
import React, {useState} from "react"
import axios from 'axios';
 import ProductForm from '../components/ProductForm';


const UpdateProduct = () => {
  
const {state:item} = useLocation();


const url ="https://64b8395f21b9aa6eb079b184.mockapi.io/products"
const [formData, setFormData] = useState(item)
const handleChange =(e) => {
  setFormData({...formData, [e.target.id]:e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
     await axios.post(url, formData);
     setFormData(initialState)
  } catch (error) {console.log(error)    }
}
  return (
    <div className='container'>
      <ProductForm formData={formData}/>
    </div>
  );
}

export default UpdateProduct