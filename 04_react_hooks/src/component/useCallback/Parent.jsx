import { useState, useCallback } from "react"; 
import Child from "./Child"; 

// Parent 组件，用于展示计数器并包含一个子组件 Child  
const Parent = () => {  
  // 使用 useState Hook 创建一个名为 count 的状态变量，初始值为 0  
  const [count, setCount] = useState(0);  

  // 使用 useCallback Hook 创建一个 memoized（记忆化的）handleClick 函数，useCallback 确保 handleClick 函数在 count 未发生变化时不会被重新创建  
  const handleClick = useCallback(() => {  
    setCount(count + 1); // 点击时，将 count 增加 1  
  }, [count]); // 依赖项，当 count 发生变化时重新创建 handleClick 函数  

  return (  
    <div>  
      {/* 显示当前的 count 值 */}  
      <p>{count}</p>  
      {/* 将 handleClick 函数传递给 Child 组件 */}  
      <Child handleClick={handleClick} />  
    </div>  
  );  
};  

export default Parent; 