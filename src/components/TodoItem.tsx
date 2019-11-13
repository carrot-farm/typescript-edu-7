/** =================================================
 * 할 일 정보
 ================================================= */
import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

// ===== props 타입
type TodoItemProps = {
  todo: Todo;
};

// ===== 컴포넌트
function TodoItem({ todo }: TodoItemProps) {
  const { onTooggle, onRemove } = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onTooggle}>{todo.text}</span>
      <span className="remove" onClick={onRemove}>(X)</span>
    </li>
  )
}
export default TodoItem;