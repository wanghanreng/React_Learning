import { useState, useEffect } from 'react'

// 创建 DataFetcher 组件
const DataFetcher = () => {
    // 定义状态存储获取的数据
    const [posts, setPosts] = useState([])
    // 定义状态存储加载状态
    const [loading, setLoading] = useState(true)
    // 定义状态存储错误信息
    const [error, setError] = useState(null)

    useEffect(() => {
        // 定义异步数据获取函数
        const fetchData = async () => {
            try {
                // 发起 GET 请求
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                // 检查响应状态
                if (!response.ok) {
                    throw new Error('网络响应出错')
                }
                // 解析 JSON 数据
                const data = await response.json()
                // 更新状态
                setPosts(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        // 调用获取函数
        fetchData()
    }, []) // 空依赖数组，仅在组件挂载时执行

    // 加载状态显示
    if (loading) return <div>加载中...</div>
    // 错误状态显示
    if (error) return <div>错误: {error}</div>

    // 渲染数据
    return (
        <div>
            <h1>文章列表</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetcher