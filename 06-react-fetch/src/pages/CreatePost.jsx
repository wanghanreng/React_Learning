/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { post } from '../api/request'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await post('/posts', { title, body })
      navigate('/')
    } catch (err) {
      setError('创建文章失败')
      setSubmitting(false)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>新建文章</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
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
          disabled={submitting}
          style={{
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: submitting ? 'not-allowed' : 'pointer',
            opacity: submitting ? 0.7 : 1
          }}
        >
          {submitting ? '提交中...' : '提交'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost
