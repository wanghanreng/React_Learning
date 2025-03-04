import { useContext } from "react"; 
import { ThemeContext } from "../context/ThemeContext"; 

// ThemeButton 组件，用于切换应用程序的主题  
const ThemeButton = () => {  
  // 使用 useContext Hook 从 ThemeContext 中获取当前的主题状态和设置主题的函数  
  const { theme, setTheme } = useContext(ThemeContext);  

  return (  
    <div  
      style={{  
        height: "100vh", // 设置 div 的高度为 100vh  
        background: theme === "light" ? "white" : "black", // 根据当前主题设置背景颜色  
      }}  
    >  
      {/* 按钮点击事件处理函数，切换主题状态 */}  
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>  
        {/* 按钮文本根据当前主题状态变化 */}  
        当前主题是: {theme === "light" ? "明亮" : "黑暗"}   
      </button>  
    </div>  
  );  
};  

export default ThemeButton; // 导出 ThemeButton 组件