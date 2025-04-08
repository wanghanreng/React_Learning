import { useState, useEffect } from 'react'
import axios from 'axios'

// 创建 AxiosDataFetcher 组件
const AxiosDataFetcher = () => {
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
                // 使用 axios 发起 GET 请求，限制获取5条数据
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: 5 // 限制返回5条数据
                    }
                })
                // axios 会自动解析 JSON 数据，直接使用 response.data
                setPosts(response.data)
                setLoading(false)
            } catch (err) {
                // axios 错误处理
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
            <h1>文章列表 (Axios版本)</h1>
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

export default AxiosDataFetcher