import React, { createContext, useContext, useState } from 'react';  

// 创建用户上下文  
const UserContext = createContext();  

// 用户提供者组件  
export const UserProvider = ({ children }) => {  
  const [user, setUser] = useState(null); // 默认用户为 null，表示未登录  

  // 登录函数  
  const login = (username, password) => {  
    // 这里可以添加实际的验证逻辑  
    if (username.trim() === '' || password.trim() === '') {  
        alert("用户名和密码不能为空");  
        return;  
      } 
    setUser({ username });  
  };  

  // 登出函数  
  const logout = () => {  
    setUser(null);  
  };  

  return (  
    <UserContext.Provider value={{ user, login, logout }}>  
      {children}  
    </UserContext.Provider>  
  );  
};  

// 自定义钩子，方便访问上下文  
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);