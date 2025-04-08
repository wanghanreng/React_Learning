import React, { useState, createContext } from 'react';  

// 创建 Context  
const MyContext = createContext();  

function MyProvider({ children }) {  
  const [user, setUser] = useState({ name: 'John', age: 30 });  

  return (  
    <MyContext.Provider value={{ user, setUser }}>  
      {children}  
    </MyContext.Provider>  
  );  
}  

export { MyContext, MyProvider };