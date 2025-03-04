import { useState, useEffect } from "react"; 

// 自定义 Hook: useDebounce  
// 此 Hook 用于实现防抖功能，即在指定时间内，如果频繁触发事件，则只有最后一次事件会被执行  
function useDebounce(value, delay) {  
  // 使用 useState Hook 创建一个状态变量 debouncedValue，用于存储防抖后的值  
  const [debouncedValue, setDebouncedValue] = useState(value);  

  // 使用 useEffect Hook 来处理副作用，设置定时器  
  useEffect(() => {  
    const handler = setTimeout(() => { // 创建一个定时器  
      setDebouncedValue(value); // 更新 debouncedValue  
    }, delay);  

    // 清理函数，在组件卸载或 effect 重新运行时执行，用于清除定时器  
    return () => {  
      clearTimeout(handler);  
    };  
  }, [value, delay]); // 依赖项是 value 和 delay，只有当它们变化时，effect 才会重新执行  

  // 返回防抖后的值，以供组件使用  
  return debouncedValue;   
}  

export default useDebounce;