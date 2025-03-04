import { useState } from "react";  

// 主题切换组件，用于在暗色和亮色主题之间切换  
const ThemeToggle = () => {  
  // 使用 useState Hook 来存储当前的主题状态  
  // isDarkMode 为 true 时表示暗色主题，为 false 时表示亮色主题  
  const [isDarkMode, setIsDarkMode] = useState(false);  

  // 定义一个函数来切换主题状态  
  const toggleTheme = () => {  
    setIsDarkMode((mode) => !mode);  
  };  

  // 渲染组件  
  // 根据 isDarkMode 的值设置背景色和文本颜色，当点击按钮时，调用 toggleTheme 函数来切换主题  
  return (  
    <div  
      style={{  
        height: "100vh", // 设置组件高度为视口高度  
        background: isDarkMode ? "black" : "white", // 根据主题状态设置背景色  
        color: isDarkMode ? "white" : "black", // 根据主题状态设置文本色  
      }}  
    >  
      <h2>这个是内容里是内容这是内容里是内容这是内容里是内容</h2>  
      <button onClick={toggleTheme}>  
        {/* 按钮根据当前主题状态变化 */}  
        Switch to {isDarkMode ? "Light" : "Dark"} Mode  
      </button>  
    </div>  
  );  
};

export default ThemeToggle;