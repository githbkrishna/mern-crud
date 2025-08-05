import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsStore from '../store/products';

const ProductCard = ({product}) => {

    const [updatedProduct, setUpdatedProduct] = useState(product);

    const { deleteProduct, updateProduct } = useProductsStore();

    const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
        if (!success) {
            alert('Error deleting product:', message);
        }  
        else {
            alert('Product deleted successfully!');
        }
    }

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if (!success) {
            alert('Error updating product:', message);
        }  
        else {
            alert('Product updated successfully!');
        }
        setIsModalOpen(false);
    }

    return (
        <>
            {/* Modal */}
            {isModalOpen && (
                <div className="absolute top-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-gray-600 text-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                        <button
                            className="absolute text-2xl top-3 right-4 cursor-pointer text-white hover:text-gray-300"
                            onClick={handleCloseModal}
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        <h2 className="text-xl font-bold mb-4">Modal Form</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name='name'
                                value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                placeholder="Enter name"
                                className="w-full text-white border-2 border-black rounded px-3 py-2"
                                required
                            />
                            <input
                                name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                placeholder="Enter price"
                                className="w-full text-white border-2 border-black rounded px-3 py-2"
                                required
                            />
                            <input
                                type="text"
                                name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                placeholder="Enter image URL"
                                className="w-full text-white border-2 border-black rounded px-3 py-2"
                                required
                            />
                            <button
                                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                                className="w-25 bg-gray-900 mr-2 cursor-pointer text-white rounded-lg py-2 font-semibold"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="w-25 bg-gray-900 cursor-pointer text-white rounded-lg py-2 font-semibold"
                            >
                                Cancle
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <article className="w-full md:w-1/2 lg:w-1/4 pl-5 mb-5 rounded-lg bg-white shadow-sm p-5 text-center sm:max-w-sm ">
                <img src={product.image} alt={product.name} className="rounded-lg sm:w-full object-cover sm:h-52"/>
                <div className='text-gray-800 mt-4'>
                    <h2 className="capitalize text-xl my-0 font-bold">{product.name}</h2>
                    <h3 className="capitalize pt-2">$ ${product.price}</h3>
                    <div className='mt-2'>
                        <button
                            className="inline-block bg-gray-900 text-white cursor-pointer rounded-lg py-3 px-12 mx-auto tracking-wide mr-2"
                            onClick={handleOpenModal}
                        >                            
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={()=> handleDeleteProduct(product._id)} className="inline-block bg-gray-900 text-white cursor-pointer rounded-lg py-3 px-12 mx-auto tracking-wide"><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ProductCard