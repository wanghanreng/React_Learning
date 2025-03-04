/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card, Button } from 'antd';
import BookDetail from '../Books/BookDetail';
import './BookCard.css'; // 引入样式文件

const BookCard = ({ cover, title, author, category, description, onDetailClick, onDelete, onEdit }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleDetailClick = () => {
    setIsDetailVisible(true);
  };

  const handleCloseDetail = () => {
    setIsDetailVisible(false);
  };

  return (
    <div>
      <Card className="book-card">
        <div className="book-card-content">
          <img className="book-cover" alt="book cover" src={cover} />
          <div className="book-info">
            <div className='book-title'>{title}</div>
            <div className="author-category">
              <span className="author">{`作者: ${author}`}</span>
              <span className="separator"> | </span>
              <span className="category">{`分类: ${category}`}</span>
            </div>
            <p className="description">{description}</p>
            <div className="book-actions">
              <Button className="detail-button" type="primary" onClick={handleDetailClick}>
                书籍详情
              </Button>
              <Button type="danger" onClick={onDelete}>
                删除书籍
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <BookDetail
        visible={isDetailVisible}
        onClose={handleCloseDetail}
        title={title}
        author={author}
        category={category}
        description={description}
        cover={cover}
        onEdit={onEdit}
      />
    </div>
  );
};

export default BookCard;