import { useState } from "react";  
import RegistForm from "./RegistForm";

const RegistPage = () => {  
  const [formData, setFormData] = useState({name: "", email: ""});  
  const handleFormSubmit = (name, email) => {  
    setFormData({name, email}); 
  };  

  return (  
    <div>  
      <h1>用户注册</h1>  
      <RegistForm onSubmit={handleFormSubmit} />  
      <h2>提交的数据：</h2>  
      <p>姓名：{formData.name}</p>  
      <p>邮箱：{formData.email}</p>  
    </div>  
  );  
};  

export default RegistPage;