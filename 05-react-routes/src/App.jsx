/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';  
import { BrowserRouter } from 'react-router-dom';  
import AppRoutes from './routes';  
import Navigation from './Navigation'; 

// 创建用户上下文  
export const UserContext = createContext();  

const App = () => {  
    const [user, setUser] = useState(null); // 存储用户信息  

    const login = (username, age) => {  
        setUser({ username, age }); // 更新用户状态  
    };  

    const logout = () => {  
        setUser(null); // 清空用户状态  
    };  

    return (  
        <UserContext.Provider value={{ user, login, logout }}>  
            <BrowserRouter>  
                <div>  
                    <Navigation /> {/* 导航条 */}  
                    <AppRoutes /> {/* 路由 */}  
                </div>  
            </BrowserRouter>  
        </UserContext.Provider>  
    );  
};  

export default App;