import { useState, useLayoutEffect } from "react";

// AnimateBox 组件，用于创建一个随机移动的盒子  
const AnimateBox = () => {  
  const [position, setPosition] = useState(0); // 使用 useState Hook 创建一个名为 position 的状态变量，初始值为 0  

  // 使用 useLayoutEffect Hook 来处理与 DOM 相关的副作用  
  useLayoutEffect(() => {  
    const timer = setInterval(() => { // 创建一个定时器，定时更新 position 状态  
      setPosition((prev) => prev + 5); // 每次增加 5 像素  
    }, 100); // 每 100 毫秒更新一次  

    // 返回一个清理函数，当组件卸载时清理定时器  
    return () => clearInterval(timer);  
  }, []); // 依赖项为空数组，表示这个 effect 只在组件挂载时执行一次  

  // 渲染一个 div 元素，使用动态样式控制其位置  
  return (  
    <div  
      style={{  
        width: "50px",  
        height: "50px",  
        backgroundColor: "blue",
        transform: `translateX(${position}px)`, // 根据 position 状态来移动位置  
      }}  
    />  
  );  
};  

export default AnimateBox;