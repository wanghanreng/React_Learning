import React, { useState } from 'react';  
import { useUser } from './UserContext1';  

const Auth = () => {  
  const { user, login, logout } = useUser();  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  

  const handleLogin = (e) => {  
    e.preventDefault();  
    login(username, password);  
    setUsername('');  
    setPassword('');  
  };  

  return (  
    <div style={{ textAlign: 'center', padding: '20px' }}>  
      {user ? (   
        <div>  
          <h2>Welcome, {user.username}</h2>  
          <button onClick={logout}>登出</button>  
        </div>  
      ) : (  
        <form onSubmit={handleLogin}>  
          <h2>用户登录</h2>  
          <input  
            type="text"  
            value={username}  
            onChange={(e) => setUsername(e.target.value)}  
            placeholder="Username"  
            required  
          />  
          <input  
            type="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            placeholder="Password"  
            required  
          />  
          <button type="submit">登录</button>  
        </form>  
      )}  
    </div>  
  );  
};  

export default Auth;