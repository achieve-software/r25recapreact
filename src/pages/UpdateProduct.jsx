import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
const UpdateProduct = () => {
  const {state: item} = useLocation();
// console.log(item);
const url = "https://64b8395f21b9aa6eb079b184.mockapi.io/products"

const [formData, setFormData] = useState(item)
const navigate = useNavigate()
const handleChange = (e)=>{
  setFormData({...formData, [e.target.id]:e.target.value })//change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
  console.log({ [e.target.id]: e.target.value });
}
const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
    await axios.put(`${url}/${item.id}`, formData);
    // setFormData(initialState)//post işleminden sonra formu boşaltmak için initialState değerini verdik
 navigate(-1)
  } catch (error) {
    console.log(error)
  }
}  
return (
    <div className='container'>    
      <ProductForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}/>    </div>
  );
}
export default UpdateProduct