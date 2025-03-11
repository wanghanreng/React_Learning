import React, { useContext } from 'react';  
import { NavLink, useLocation } from 'react-router-dom';  
import { Button, Popover } from 'antd';  
import { UserContext } from './App'; // 引入 UserContext  
import './app.css'; // CSS 文件  

const Navigation = () => {  
    const { user, logout } = useContext(UserContext); // 获取用户信息  
    const location = useLocation();  
    const isLoginPath = location.pathname === '/login';  

    // 气泡内容，显示用户名和年龄  
    const popoverContent = user ? (  
        <div>  
            <p>Username: {user.username}</p>  
            <p>Age: {user.age}</p>  
            <Button type="primary" onClick={logout}>登出</Button>  
        </div>  
    ) : (  
        <div>  
            <p>请点击下面的按钮进行登录。</p>  
            <Button type="primary" onClick={() => window.location.href = '/login'}>登录</Button>  
        </div>  
    );  

    return (  
        !isLoginPath && (  
            <nav>  
                <div className="nav-links">  
                    <NavLink to="/" activeClassName="active">Home</NavLink>  
                    <NavLink to="/about" activeClassName="active">About</NavLink>  
                    <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>  
                    <NavLink to="/book/123" activeClassName="active">Book</NavLink>  
                </div>  

                {/* 显示个人信息或登录按钮 */}  
                <Popover content={popoverContent} title={user ? '个人信息' : '登录选项'}>  
                    <Button className="popover-button" type="link">  
                        {user ? '个人信息' : '登录'}  
                    </Button>  
                </Popover>  
            </nav>  
        )  
    );  
};  

export default Navigation;