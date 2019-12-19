import React, { useState } from 'react';
import './Example.css';

function Example2() {
   const [todos, setTodos] = useState([
      {
         content: 'Pickup dry cleaning',
         isCompleted: true
      },
      {
         content: 'Get haircut',
         isCompleted: false
      },
      {
         content: 'Build a todo app in React',
         isCompleted: false
      }
   ]);

   const handleKeyDown = (e, i) => {
      if (e.key === 'Enter') {
         createTodoAtIndex(e, i);
      }

      if (e.key === 'Backspace' && todos[i].content === '') {
         e.preventDefault();
         return removeTodoAtIndex(i);
      }
   };

   const createTodoAtIndex = (e, i) => {
      const newTodos = [...todos]; // Sort array
      newTodos.splice(i + 1, 0, {
         content: '',
         isCompleted: false
      });

      setTodos(newTodos);
      setTimeout(() => {
         document.forms[0].elements[i + 1].focus();
      }, 0);
   };

   const updateTodoAtIndex = (e, i) => {
      const newTodos = [...todos];
      newTodos[i].content = e.target.value;
      setTodos(newTodos);
   };

   const removeTodoAtIndex = i => {
      if (i === 0 && todos.length === 1) return;
      setTodos(todos =>
         todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
      );
      setTimeout(() => {
         document.forms[0].elements[i - 1].focus();
      }, 0);
   };

   const toggleTodoCompleteAtIndex = index => {
      const temporaryTodos = [...todos];
      temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
      setTodos(temporaryTodos);
   };

   return (
      <div>
         <h4>Todo App</h4>
         <form className="todo-list">
            <ul>
               {todos.map((todo, i) => (
                  <div
                     key={i}
                     className={`todo ${todo.isCompleted &&
                        'todo-is-completed'}`}
                  >
                     <div
                        className={'checkbox'}
                        onClick={() => toggleTodoCompleteAtIndex(i)}
                     >
                        {todo.isCompleted && <span>&#x2714;</span>}
                     </div>
                     <input
                        type="text"
                        value={todo.content}
                        onKeyDown={e => handleKeyDown(e, i)}
                        onChange={e => updateTodoAtIndex(e, i)}
                     />
                  </div>
               ))}
            </ul>
         </form>
      </div>
   );
}

export default Example2;
