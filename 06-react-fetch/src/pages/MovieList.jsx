/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://apis.tianapi.com/film/index?key=d3175447f8a94cfb526d25e2cbdb0601&num=10&page=${currentPage}`
        )
        if (response.data.code === 200) {
          setMovies(response.data.result.newslist)
          // 假设每页10条数据，总数据100条
          setTotalPages(10)
        } else {
          setError(response.data.msg || '获取电影数据失败')
        }
      } catch (err) {
        setError('获取电影数据失败')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  if (loading) return (
    <div className="loading-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <div>加载中...</div>
    </div>
  )

  if (error) return (
    <div className="error-container" style={{
      padding: '20px',
      color: '#ff4d4f',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '10px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    }}>
      {error}
    </div>
  )

  return (
    <div className="movie-list-container" style={{
      padding: '20px',
      minHeight: '100vh',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
      }}>电影列表</h2>
      
      <div className="movie-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <img 
              src={movie.picUrl} 
              alt={movie.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            />
            <h3 style={{ margin: '10px 0', color: '#333' }}>{movie.title}</h3>
            <p style={{ 
              color: '#666',
              fontSize: '14px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{movie.description}</p>
          </div>
        ))}
      </div>

      <div className="pagination" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        margin: '20px 0',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '10px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              padding: '8px 12px',
              border: 'none',
              borderRadius: '5px',
              background: currentPage === page ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              color: currentPage === page ? '#333' : '#666',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.3)'
              }
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MovieList