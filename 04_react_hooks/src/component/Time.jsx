import { useState, useEffect } from "react";  

const Time = () => {  
  // 使用 useState 钩子，将 time 初始化为当前的时间  
  const [time, setTime] = useState(new Date().toLocaleTimeString());  

  useEffect(() => {  
    // 使用 useEffect 钩子,设置一个定时器,每秒钟更新一次时间  
    const timer = setInterval(() => {  
      // 更新状态为当前时间  
      setTime(new Date().toLocaleTimeString());  
    }, 1000);  
 
    return () => {  
      // 在组件卸载时清除定时器  
      clearInterval(timer);  
    };  
  }, []);  
 
  return <h1>{time}</h1>;  
};  

export default Time;