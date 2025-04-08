import React, { useMemo } from 'react';  
import useCartStore from '../store/cartStore';  

const Cart = () => {  
  // 使用多个独立的选择器而不是返回一个对象，避免引用变化导致的无限循环
const items = useCartStore((state) => state.items);
const removeItem = useCartStore((state) => state.removeItem);
const updateQuantity = useCartStore((state) => state.updateQuantity);  

  // 直接在组件内计算总价，不从store获取getTotal函数
  const total = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (  
    <div className="container mx-auto p-4">  
      <h2 className="text-2xl font-bold mb-4">购物车</h2>  
      {items.length === 0 ? (  
        <p>购物车是空的</p>  
      ) : (  
        <div className="space-y-4">  
          {items.map((item) => (  
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">  
              <h3 className="text-xl font-semibold">{item.name}</h3>  
              <p className="text-gray-600">¥{item.price}</p>  
              <div className="flex items-center space-x-4">  
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-3 py-1.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow hover:from-gray-300 hover:to-gray-400 transform hover:scale-105 transition-all duration-200">-</button>  
                <span className="text-lg font-medium">{item.quantity}</span>  
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-3 py-1.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow hover:from-gray-300 hover:to-gray-400 transform hover:scale-105 transition-all duration-200">+</button>  
                <button onClick={() => removeItem(item.id)} className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 font-medium">删除</button>  
              </div>  
            </div>  
          ))}  
          <div className="mt-4 text-right">  
            <p className="text-xl font-bold">总计：¥{total}</p>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
};  

export default Cart;