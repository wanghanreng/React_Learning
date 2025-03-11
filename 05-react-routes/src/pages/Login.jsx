import React, { useState, useContext } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { UserContext } from '../App'; // 引入 UserContext  
import './Login.css'; // CSS 文件  

const users = [  
    { username: 'zhangsan', password: '123456', age: 20 },  
    { username: 'lisi', password: '654321', age: 22 }  
];  

const Login = () => {  
    const navigate = useNavigate();  
    const { login } = useContext(UserContext); // 获取登录函数  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  

    const handleLogin = (e) => {  
        e.preventDefault();  
        const user = users.find(user => user.username === username && user.password === password);  

        if (user) {  
            login(user.username, user.age); // 调用 login 方法传入用户名和年龄  
            navigate('/'); // 登录成功后跳转到仪表板  
        } else {  
            alert('Invalid username or password');  
        }  
    };  

    return (  
        <div className="container">  
            <h1 className="title">Login Page</h1>  
            <form onSubmit={handleLogin} className="form">  
                <input  
                    type="text"  
                    placeholder="Username"  
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}  
                    required  
                    className="input"  
                />  
                <input  
                    type="password"  
                    placeholder="Password"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    required  
                    className="input"  
                />  
                <button type="submit" className="button">Login</button>  
            </form>  
        </div>  
    );  
};  

export default Login;