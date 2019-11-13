/** =================================================
 * 할 일 리스트
 ================================================= */
import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList() {
  const todos = useTodos();


  // # 리스트가 존재하지 않을 때.
  if (todos.length === 0) { return <p>등록된 항목이 없습니다.</p> }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default TodoList;