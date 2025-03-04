import { useState, useEffect } from "react";  

// PageTitle 组件，用于展示点击按钮的次数，并更新页面标题  
const PageTitle = () => {  
  // 使用 useState Hook 来创建一个名为 count 的状态变量，初始值为 0  
  const [count, setCount] = useState(0);  

  // 使用 useEffect Hook 来执行副作用操作，即更新页面标题  
  useEffect(() => {  
    // 当 count 状态发生变化时，更新页面标题为 "You clicked X times"  
    document.title = `You clicked ${count} times`;  
  }, [count]); // 依赖数组 [count] 确保在 count 发生变化时才执行副作用  

  // 渲染组件，包含一个按钮  
  return (  
    <div>  
      {/* 按钮点击事件处理函数，每次点击时将 count 状态加 1 */}  
      <button onClick={() => setCount(count + 1)}>Click me</button>  
    </div>  
  );  
};  

export default PageTitle;