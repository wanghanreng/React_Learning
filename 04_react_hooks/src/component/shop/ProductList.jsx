import React from 'react';  
import useCartStore from '../store/cartStore';  

const ProductList = () => {  
  const addItem = useCartStore((state) => state.addItem);  

  const products = [  
    { id: 1, name: '面包', price: 50, description: '好吃的面包' },  
    { id: 2, name: '笔记本', price: 20, description: '普通的笔记本' },  
    { id: 3, name: '手机', price: 3000, description: '诺基亚 plus max' },  
  ];  

  return (  
    <div className="container mx-auto p-4">  
      <h2 className="text-2xl font-bold mb-4">商品列表</h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
        {products.map((product) => (  
          <div key={product.id} className="border p-4 rounded-lg shadow">  
            <h3 className="text-xl font-semibold">{product.name}</h3>  
            <p className="text-gray-600">{product.description}</p>  
            <p className="text-lg font-bold mt-2">¥{product.price}</p>  
            <button onClick={() => addItem(product)} className="mt-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 font-medium">  
              添加到购物车  
            </button>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ProductList;