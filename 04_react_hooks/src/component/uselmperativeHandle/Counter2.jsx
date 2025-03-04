import { useImperativeHandle, forwardRef, useState } from "react";

const Counter2 = forwardRef((props, ref) => {  
  const [count, setCount] = useState(10); // 使用 useState Hook 来创建 count 状态，初始值为 10  

  // 使用 useImperativeHandle 暴露 reset 方法  
  useImperativeHandle(ref, () => ({  
    reset: () => {  
      setCount(0); // 将 count 重置为 0  
    },  
  }));  

  return <div>Count: {count}</div>; // 渲染当前的计数  
});  

export default Counter2;