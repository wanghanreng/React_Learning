import { useMemo } from "react";

// ListFilter 组件，用于根据给定的查询条件过滤列表项  
const ListFilter = ({ items, query }) => {  
  // 使用 useMemo Hook 来优化 filteredItems 的计算，只有当 items 或 query 发生变化时会重新计算  
  const filteredItems = useMemo(() => {  
    // 使用 filter 方法筛选出包含查询文本的项，将项目转换为小写以进行不区分大小写的比较  
    return items.filter((item) =>   
      item.toLowerCase().includes(query.toLowerCase())  
    );  
  }, [items, query]); // 依赖项，只有当 items 或 query 变化时才会重新计算  

  // 渲染组件，显示过滤后的列表项  
  return (  
    <ul>  
      {filteredItems.map((item) => (  
        <li key={item}>{item}</li> // 为每个列表项提供一个唯一的 key  
      ))}  
    </ul>  
  );  
};  

export default ListFilter;