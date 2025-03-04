import { useState } from "react";  
import { ThemeContext } from "../context/ThemeContext"; 

// ThemeProvider 组件，旨在为需要访问主题的部分提供主题值和一个设置主题的方法  
const ThemeProvider = ({ children }) => {  
  // 使用 useState Hook 创建一个状态来保存当前的主题，初始值设为 "light"  
  const [theme, setTheme] = useState("light");  

  // 渲染 Provider 组件，并传递 theme 和 setTheme 作为 value 属性，这样 Provider 下的所有子组件都可以访问主题  
  return (  
    <ThemeContext.Provider value={{ theme, setTheme }}>  
      {children} {/* 渲染子组件 */}  
    </ThemeContext.Provider>  
  );  
};  

export default ThemeProvider; // 导出 ThemeProvider 组件