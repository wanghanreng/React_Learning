import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce"; 

// Search 组件，用于创建一个搜索框并处理输入  
const Search = ({ onSearch }) => {  
  const [input, setInput] = useState(""); // 创建一个状态变量 input 来保存输入值  

  // 使用 useDebounce Hook 创建一个 debouncedInput 变量，延迟 300 毫秒更新输入值  
  const debouncedInput = useDebounce(input, 300);  

  // 使用 useEffect Hook 来处理副作用  
  useEffect(() => {  
    if (debouncedInput) { // 如果 debouncedInput 存在  
      onSearch(debouncedInput); // 调用 onSearch 函数并传入 debouncedInput  
    }  
  }, [debouncedInput, onSearch]); // 依赖项是 debouncedInput 和 onSearch  

  // 渲染组件，包括输入框，输入框的值由 input 状态控制，并通过 onChange 事件更新状态  
  return (  
    <input  
      type="text"  
      value={input}  
      onChange={(e) => setInput(e.target.value)} // 更新 input 状态  
      placeholder="Search..." // 输入框的提示文本  
    />  
  );  
};  

export default Search;