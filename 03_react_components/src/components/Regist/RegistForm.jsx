import { useState } from "react";  

const RegistForm = ({ onSubmit }) => {  
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    onSubmit(name, email); // 传递数据给父组件  
    setName(""); // 清空输入框  
    setEmail(""); // 清空输入框  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <div>  
        <label>姓名：</label>  
        <input   
          type="text"     
          onChange={(e) => setName(e.target.value)}   
          required   
        />  
      </div>  
      <div>  
        <label>邮箱：</label>  
        <input   
          type="email"     
          onChange={(e) => setEmail(e.target.value)}   
          required   
        />  
      </div>  
      <button>提交</button>  
    </form>  
  );  
};  

export default RegistForm;