import { useState } from "react"; 
import ExpensiveCalculation from "./ExpensiveCalculation"; 

// ExpensiveCalculationParent 组件，它管理内部状态并渲染子组件  
const ExpensiveCalculationParent = () => {  
  const [count, setCount] = useState(0); // 使用 useState Hook 创建状态 count，初始值为 0  

  return (  
    <div>  
      {/* 按钮，点击时会将 count 加 1 */}  
      <button onClick={() => setCount(count + 1)}>增加</button>  
      {/* 渲染 ExpensiveCalculation 组件，并将 count 作为 number 属性传递 */}  
      <ExpensiveCalculation number={count} />  
    </div>  
  );  
};  

export default ExpensiveCalculationParent; 