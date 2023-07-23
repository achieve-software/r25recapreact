import React, {useState} from 'react'
import ProductForm from "../components/ProductForm";
import axios from 'axios';


const initialState ={
  name:"",
  image:"",
  price:0,
  dampingRate:0,
  amount:1
}

const NewProduct = () => {
  const url = "https://64b8395f21b9aa6eb079b184.mockapi.io/products";
  const [formData, setFormData] = useState(initialState);

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
      <ProductForm handleChange={handleChange} formData={formData} handleSubmit={handleSubmit}/> 
    </div>
  );
}

export default NewProduct