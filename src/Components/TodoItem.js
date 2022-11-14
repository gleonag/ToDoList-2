import React from 'react'

const TodoItem = ({todo, onComplete, onDeleteItem}) => {
    
    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none' ,
            margin: '20px',
            border: '1px solid white',
            backgroundColor: 'grey'
        }
    }

  return (
    <div style= {getStyle()}>
        <input  type='checkbox' 
                checked = {todo.completed} 
                onChange = {() => onComplete(todo.id)}
                
        />
        {todo.task}
        <button className='add-btn' onClick = {() => onDeleteItem(todo.id) }>X</button>
    </div>
  )
}

export default TodoItem