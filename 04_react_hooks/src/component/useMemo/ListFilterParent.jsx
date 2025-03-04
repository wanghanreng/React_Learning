import { useState } from "react"; 
import ListFilter from "./ListFilter";  

const ListFilterParent = () => {  
  const [query, setQuery] = useState(""); // 使用 useState Hook 创建一个状态 query，初始值为一个空字符串  
  const items = ["Apple", "Banana", "Orange", "Grape"]; // 定义一个包含水果名称的数组  

  return (  
    <div>  
      <input  
        type="text" // 输入框类型为文本  
        value={query} // 输入框的值绑定到 query 状态  
        onChange={(e) => setQuery(e.target.value)} // 当输入框值发生变化时，更新 query 状态  
        placeholder="Search" // 输入框的占位符文本  
      />  
      <ListFilter items={items} query={query} /> 
      {/* 渲染 ListFilter 组件，并将 items 和 query 作为 props 传递   */}
    </div>  
  );  
};  

export default ListFilterParent;