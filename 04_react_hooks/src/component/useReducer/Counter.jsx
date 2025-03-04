import { useReducer } from "react";

// 定义一个 reducer 函数，用于管理计数器的状态变化  
const countReducer = (state, action) => {  
    switch (action.type) {  
      case "increment":  
        // 如果 action 类型是 "increment"，状态的 count 值加 1  
        return { count: state.count + 1 };  
      case "decrement":  
        // 如果 action 类型是 "decrement"，状态的 count 值减 1  
        return { count: state.count - 1 };  
      default:  
        // 如果 action 类型不匹配，返回当前状态不变  
        return state;  
    }  
  };  
  
  // Counter 组件，使用 useReducer Hook 来管理计数器的状态  
  const Counter = () => {  
    // 使用 useReducer Hook，传入 reducer 函数和初始状态 { count: 0 }，返回状态和 dispatch 函数  
    const [state, dispatch] = useReducer(countReducer, { count: 0 });  
  
    // 渲染组件，显示当前的 count 值和两个按钮  
    return (  
      <div>  
        {/* 显示当前计数 */}  
        <p>当前计数: {state.count}</p>  
        {/* 点击触发 "increment" 动作 */}  
        <button onClick={() => dispatch({ type: "increment" })}>增加</button>  
        {/* 点击触发 "decrement" 动作 */}  
        <button onClick={() => dispatch({ type: "decrement" })}>减少</button>  
      </div>  
    );  
  };  
  
  export default Counter;