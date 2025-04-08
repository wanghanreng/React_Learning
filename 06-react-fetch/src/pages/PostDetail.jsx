/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { get, put } from '../api/request'
import { useParams, Link, useNavigate } from 'react-router-dom'

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`)
        setPost(data)
        setTitle(data.title)
        setBody(data.body)
        setLoading(false)
      } catch (err) {
        setError('获取文章详情失败')
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) return <div>加载中...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>
  if (!post) return <div>文章不存在</div>

  return (
    <div style={{ padding: '20px' }}>
      {isEditing ? (
        <form onSubmit={async (e) => {
          e.preventDefault()
          try {
            await put(`/posts/${id}`, { title, body })
            setPost({ ...post, title, body })
            setIsEditing(false)
          } catch (err) {
            setError('修改文章失败')
          }
        }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>标题：</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #d9d9d9',
                borderRadius: '4px'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>内容：</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #d9d9d9',
                borderRadius: '4px',
                minHeight: '200px'
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          >
            保存
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            style={{
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            取消
          </button>
        </form>
      ) : (
        <>
          <h2>{post.title}</h2>
          <div style={{ margin: '20px 0', lineHeight: '1.6' }}>{post.body}</div>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              marginRight: '10px'
            }}
          >
            编辑
          </button>
          <Link 
            to="/"
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#52c41a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            返回列表
          </Link>
        </>
      )}
    </div>
  )
}

export default PostDetail
