// BookItem.jsx
import { useState } from 'react';
import BookCard from "../my-card/BookCard";
import './BookItem.css'; // 引入 CSS 文件
import BookInput from "./BookInput"; // 引入 BookInput 组件

const BookItem = () => {
  const [books, setBooks] = useState([
    {
      cover: "https://img0.baidu.com/it/u=1820376898,2597216803&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=608",
      title: "白鲸记",
      author: "赫尔曼·梅尔维尔",
      category: "111",
      description: "捕鲸船“裴廓德”号船长亚哈，在一次捕鲸过程中，被凶残聪明的白鲸莫比·迪克咬掉了一条腿，因此他满怀复仇之念，一心想追捕这条白鲸，竟至失去理性，变成一个独断独行的偏执症狂。他的船几乎兜遍了全世界经历辗转，终于与莫比·迪克遭遇。经过三天追踪，他用鱼叉击中白鲸，但船被白鲸撞破，亚哈被鱼叉上的绳子缠住，掉入海中。全船人落海，只有水手以实玛利（《圣经》中人名，意为被遗弃的人）一人得救。"
    },
    {
      cover: "https://img1.baidu.com/it/u=1211034070,1869298314&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=699",
      title: "呼啸山庄",
      author: "艾米莉·勃朗特",
      description: "《呼啸山庄》描写的吉卜赛弃儿希刺克厉夫被山庄老主人收养后，因不堪受辱和恋爱受挫，外出致富。回来后发现女友凯瑟琳已与地主林顿结婚，继而产生对地主及其子女进行报复的故事。全篇充满了强烈的反压迫、求自由的斗争精神，又始终笼罩着离奇、紧张、浪漫的艺术气氛。"
    },
    // 可以添加更多书籍对象
  ]);

  const handleDetailClick = () => {
    console.log('书籍详情被点击');
  };

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleEdit = (index, updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[index] = updatedBook;
    setBooks(updatedBooks);
  };

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="book-item-container">
      <BookInput onAddBook={addBook} />
      {books.map((book, index) => (
        <BookCard
          key={index}
          cover={book.cover}
          title={book.title}
          author={book.author}
          category={book.category}
          description={book.description}
          onDetailClick={handleDetailClick}
          onDelete={() => handleDelete(index)}
          onEdit={(updatedBook) => handleEdit(index, updatedBook)}
        />
      ))}
    </div>
  );
};

export default BookItem;