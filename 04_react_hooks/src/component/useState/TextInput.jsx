import { useState } from "react";  

// TextInput 组件，用于获取用户的文本输入  
const TextInput = () => {  
  // 使用 useState Hook 来存储输入框的值  
  // inputValue 变量保存当前的输入值，setInputValue 函数用于更新这个值  
  const [inputValue, setInputValue] = useState("");  

  // handleChange 函数会在输入框的值发生变化时被调用  
  // 它接收一个事件对象 e 作为参数，并使用 e.target.value 获取输入框的新值，然后调用 setInputValue 函数更新 inputValue 状态  
  const handleChange = (e) => {  
    setInputValue(e.target.value);  
  };  

  // 渲染组件，包含一个输入框和一个段落  
  // 输入框的 value 属性绑定到 inputValue 状态，这样输入框的值总是显示最新的输入值，onChange 事件处理程序设置为 handleChange，以便在输入状态变化时更新状态  
  return (  
    <div>  
      <input  
        type="text"  
        value={inputValue} // 将输入框的值绑定到 inputValue 状态  
        onChange={handleChange} // 设置输入框的 onChange 事件处理函数  
      />  
      {/* 显示当前用户的输入值 */}  
      <p>当前输入为：{inputValue}</p>  
    </div>  
  );  
};  

export default TextInput;