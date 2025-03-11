import React from "react";  
import { useParams } from "react-router-dom";  

const Book = () => {  
  const { bookId } = useParams();  // 从路由参数中获取 bookId  

  return (  
    <div>  
      <h2>Book Page</h2>  
      <h3>bookId: {bookId}</h3> {/* 显示 bookId */}  
    </div>  
  );  
}  

export default Book;