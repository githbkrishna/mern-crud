import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import useProductsStore from '../store/products';

const HomePage = () => {

  const { fetchProducts, products } = useProductsStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

  console.log("products", products);

  return (
    <div className="w-full h-auto">
        <div className="text-center mt-24 pb-24">
          <h1 className="text-5xl mb-6 font-bold">Experience the Difference</h1>
          <p className="text-xl">Join us and start your journey today.</p>
          <div className='flex items-center justify-center mt-8 gap-5 flex-wrap'>
            {
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default HomePage