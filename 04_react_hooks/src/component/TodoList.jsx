import React, { useState } from 'react';  

const TodoList = () => {  
  // 使用 useState 管理待办事项列表和输入框的内容  
  const [todos, setTodos] = useState([]);  
  const [inputValue, setInputValue] = useState('');  

  // 添加新的待办事项  
  const addTodo = () => {  
    if (inputValue.trim() !== '') {  
      setTodos([...todos, { text: inputValue, completed: false }]);  
      setInputValue(''); // 清空输入框  
    }  
  };  

  // 切换事项为已完成或未完成  
  const toggleComplete = (index) => {  
    const newTodos = todos.map((todo, i) => {  
      if (i === index) {  
        return { ...todo, completed: !todo.completed };  
      }  
      return todo;  
    });  
    setTodos(newTodos);  
  };  

  return (  
    <div style={{ padding: '20px' }}>  
      <h2>待办事项列表</h2>  
      <input  
        type="text"  
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}  
        placeholder="输入新的待办事项"  
      />  
      <button onClick={addTodo}>添加</button>  
      <ul>  
        {todos.map((todo, index) => (  
          <li  
            key={index}  
            onClick={() => toggleComplete(index)}  
            style={{  
              textDecoration: todo.completed ? 'line-through' : 'none',  
              cursor: 'pointer'  
            }}  
          >  
            {todo.text}  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default TodoList;