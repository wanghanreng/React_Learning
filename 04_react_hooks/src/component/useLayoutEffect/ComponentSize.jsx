import { useState, useLayoutEffect, useRef } from "react"; 

// ComponentSize 组件，用于展示子组件的尺寸  
const ComponentSize = () => {  
  const [size, setSize] = useState(0); // 使用 useState Hook 创建一个名为 size 的状态变量，初始值为 0  
  const divRef = useRef(); // 使用 useRef Hook 创建一个 ref 对象，用于访问子组件的 DOM 元素  

  // 使用 useLayoutEffect Hook 获取 DOM 相关的副作用  
  useLayoutEffect(() => {  
    // 当组件挂载或更新时，获取 ref 指向的 DOM 元素，并更新尺寸  
    setSize(divRef.current.offsetWidth);  
  }, []); // 依赖项为空数组，表示这个 effect 只在组件挂载时执行一次  

  return (  
    <div>  
      <div  
        ref={divRef} // 将 ref 绑定到一个 div 元素  
        style={{  
          width: "200px",  
          height: "100px",  
          backgroundColor: "lightblue",  
        }}  
      />  
      <p>Width of div: {size}</p> {/* 显示 div 的宽度 */}  
    </div>  
  );  
};  

export default ComponentSize;