import React, { useState } from 'react';  

const TodoList = () => {  
    const [todos, setTodos] = useState([]);  
    const [inputValue, setInputValue] = useState('');  

    const handleAddTodo = () => {  
        if (inputValue.trim() === '') return;  
        setTodos([...todos, { text: inputValue, completed: false }]);  
        setInputValue('');  
    };  

    const handleInputChange = (e) => {  
        setInputValue(e.target.value);  
    };  

    const toggleTodo = (index) => {  
        const newTodos = todos.map((todo, i) => {  
            if (i === index) {  
                return { ...todo, completed: !todo.completed };  
            }  
            return todo;  
        });  
        setTodos(newTodos);  
    };  

    const handleDeleteTodo = (index) => {  
        const newTodos = todos.filter((_, i) => i !== index);  
        setTodos(newTodos);  
    };  

    return (  
        <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>  
            <h2 style={{ marginBottom: '20px' }}>待办事项</h2>  
            <div>  
                <input  
                    type="text"  
                    value={inputValue}  
                    onChange={handleInputChange}  
                    placeholder="输入待办事项"  
                    style={{ padding: '10px', width: '300px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px' }}  
                />  
                <button onClick={handleAddTodo} style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#ffffff', cursor: 'pointer' }}>  
                    添加  
                </button>  
            </div>  
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', marginTop: '20px' }}>  
                {todos.map((todo, index) => (  
                    <li key={index} style={{ fontSize: '16px', display: 'flex', alignItems: 'center', margin: '10px 0' }}>  
                        <input  
                            type="checkbox"  
                            checked={todo.completed}  
                            onChange={() => toggleTodo(index)}  
                            style={{ marginRight: '10px' }}  
                        />  
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>{todo.text}</span>  
                        <button onClick={() => handleDeleteTodo(index)} style={{ padding: '5px 10px', border: 'none', borderRadius: '4px', backgroundColor: '#dc3545', color: '#ffffff', cursor: 'pointer' }}>  
                            删除  
                        </button>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default TodoList;