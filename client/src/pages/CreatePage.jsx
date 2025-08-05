import React, { useState } from 'react'
import useProductsStore from '../store/products'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  const {createProduct} = useProductsStore()

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      alert('Error creating product:', message);
    }
    else {
      alert('Product created successfully!');
    }
    console.log('Product added:', newProduct);
    setNewProduct({ name: '', price: '', image: '' });
  }

  return (
    <section className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='bg-gray-600 p-5 rounded-sm text-center'>
        <h1 className='text-4xl'>Create Product</h1>
        <div className="container p-5 flex flex-col items-center gap-5">
            <input type='text' name='name' value={newProduct.name} onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})} placeholder='Product Name' className='border-2 border-amber-50 rounded-sm h-12 p-2 w-100 d-block'/>
            <input type='number' name='price' value={newProduct.price} onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})} placeholder='Product Price' className='border-2 border-amber-50 rounded-sm h-12 p-2 w-100 d-block'/>
            <input type='text' name='image' value={newProduct.image} onChange={(e)=> setNewProduct({...newProduct, image: e.target.value})} placeholder='Product Image' className='border-2 border-amber-50 rounded-sm h-12 p-2 w-100 d-block'/>
            <button onClick={handleAddProduct} className='bg-blue-500 cursor-pointer rounded-sm h-12 p-2 w-100 d-block'>Add product</button>
        </div>
      </div>
    </section>
  )
}

export default CreatePage