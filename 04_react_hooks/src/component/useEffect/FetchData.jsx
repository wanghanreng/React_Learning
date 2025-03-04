import { useState, useEffect } from "react";

function FetchData() {  
    // 使用 useState Hook 来存储从 API 获取的数据  
    const [data, setData] = useState(null);  
    // 使用 useState Hook 来存储可能发生的错误信息  
    const [error, setError] = useState(null);  
  
    // 使用 useEffect Hook 来处理副作用，例如数据获取  
    useEffect(() => {  
      // 执行 fetch 请求，从 API 获取数据  
      fetch("https://api.xygeng.cn/openapi/one")  
        .then((response) => {  
          // 检查响应是否成功  
          if (!response.ok) {  
            // 如果响应状态不成功，抛出错误  
            throw new Error("网络请求失败");  
          }  
          // 解析响应数据为 JSON 格式  
          return response.json();  
        })  
        .then((json) => {  
          // 假设 API 返回回来的数据结构是 { code: 200, data: {...}, error: null, ... }  
          if (json.code === 200 && json.data) {  
            // 如果响应状态码为 200 且包含数据，更新状态以存储数据  
            setData(json.data);  
          } else {  
            // 如果响应状态码不为 200 或不包含数据，更新状态以存储错误信息  
            setError(json.error || "获取数据失败");  
          }  
        })  
        .catch((err) => {  
          // 如果在请求过程中发生错误，更新状态以存储错误信息  
          setError(err.message || "未知错误");  
        });  
    }, []); // 依赖数组为空，effect 只在组件挂载时运行一次  
  
    // 如果存在错误，渲染错误信息  
    if (error) return <p>{error}</p>;   
    // 如果数据正在加载，渲染加载中提示
    if (!data) return <p>加载中...</p>;
    // 如果数据已经成功加载，渲染数据
    return (
        <div>
            <h2>{data.content}</h2>
            <p>来源：{data.origin}</p>
            <p>作者：{data.name}</p>
            <p>标签：{data.tag}</p>
        </div>
    );
}

export default FetchData;