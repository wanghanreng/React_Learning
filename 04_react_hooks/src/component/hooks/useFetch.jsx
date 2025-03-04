import { useState, useEffect } from "react";

// 自定义 Hook: useFetch，该 Hook 用于从指定的 URL 获取数据，并管理加载状态和错误信息  
function useFetch(url) {  
  const [data, setData] = useState(null); // data 用于存储获取的数据  
  const [loading, setLoading] = useState(true); // loading 用于表示数据是否正在加载  
  const [error, setError] = useState(null); // error 用于存储发生的错误信息  

  // 使用 useEffect Hook 来处理副作用，如数据获取  
  useEffect(() => {  
    const fetchData = async () => { // 定义 fetchData 函数用于获取数据  
      try {  
        const response = await fetch(url); // 发起 fetch 请求，等待响应  
        if (!response.ok) { // 检查响应是否成功  
          throw new Error(`HTTP error! status: ${response.status}`); // 如果响应不成功，抛出错误  
        }  

        const result = await response.json(); // 将响应解析为 JSON，更新 data 状态  
        setData(result);  
      } catch (err) { // 处理获取数据过程中发生的错误  
        setError(err.message);  
      } finally { // 不管请求成功还是失败，都设置 loading 状态为 false  
        setLoading(false);  
      }  
    };  

    fetchData(); // 调用 fetchData 函数开始获取数据  
  }, [url]); // 依赖项为 url，只有当 url 发生改变时，才会重新执行 effect  

  // 返回获取到的数据、loading 状态和 error 信息  
  return { data, loading, error };  
}  

export default useFetch;