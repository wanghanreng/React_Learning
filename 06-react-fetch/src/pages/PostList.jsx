/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { get, del } from '../api/request'
import { Link } from 'react-router-dom'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const data = await get('/posts')
      setPosts(data)
      setLoading(false)
    } catch (err) {
      setError('获取文章列表失败')
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await del(`/posts/${id}`)
      setPosts(posts.filter(post => post.id !== id))
    } catch (err) {
      setError('删除文章失败')
    }
  }

  if (loading) return <div>加载中...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    <div>
      <h2>文章列表</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body.substring(0, 100)}...</p>
          <button 
            onClick={() => handleDelete(post.id)}
            style={{ 
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer'
            }}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  )
}

export default PostList
