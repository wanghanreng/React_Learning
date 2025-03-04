import React from "react"; 
import useFetch from "./hooks/useFetch";

const Data = () => {  
  // 使用 useFetch Hook 从指定的 URL 获取数据，并接收 loading 和 error 状态  
  const { data, loading, error } = useFetch("https://api.xygeng.cn/openapi/one");  

  // 如果数据正在加载，显示加载中...  
  if (loading) return <div>加载中...</div>;  

  // 如果发生错误，显示错误信息  
  if (error) return <div>发生错误: {error}</div>;  

  // 如果数据已加载并且存在，渲染数据  
  return (  
    <div>  
      <p>来源: {data.data.origin}</p> {/* 显示数据来源 */}  
      <p>作者: {data.data.name}</p> {/* 显示作者 */}  
      <p>标签: {data.data.tag}</p> {/* 显示标签 */}  
      <p>{data.data.content}</p> {/* 显示内容 */}  
    </div>  
  );  
};  

export default Data; // 导出 Data 组件