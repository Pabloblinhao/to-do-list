import React from 'react';


function TodoItem(props) {
    const {todo, removeTodo, completed} = props
 return (
    <div className={todo.completed ? "todo-row completed" : "todo-row"}>
        {todo.text}
        <div className="iconsContainer">
            <button className="icon-delet" onClick={() => removeTodo(todo.id)}>Delet</button>
            <button className="icon-check" onClick={() => completed(todo.id)}>Check</button>
        </div>
    
    </div>
 )
    
};

export default TodoItem;