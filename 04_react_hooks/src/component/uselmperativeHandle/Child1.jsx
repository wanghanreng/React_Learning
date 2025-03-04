import { useImperativeHandle, forwardRef } from "react";

// Child 组件，使用 forwardRef 和 useImperativeHandle 来暴露 DOM 操作给父组件  
const Child = forwardRef((props, ref) => {  
  // 使用 useImperativeHandle Hook 来自定义暴露给父组件的实例方法  
  useImperativeHandle(ref, () => ({  
    focus: () => { // 定义 focus 方法  
      // 当父组件调用此方法时，将获取 id 为 "child-input" 的 DOM 元素，并使其获得焦点  
      document.getElementById("child-input").focus();  
    }  
  }));  

  // 渲染一个输入元素，其 id 为 "child-input"  
  return <input id="child-input" type="text" />;  
});  

export default Child;