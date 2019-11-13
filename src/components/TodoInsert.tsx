/** =================================================
 * 새 항목 등록.
 ================================================= */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

// ===== 컴포넌트
function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder={"할 일을 입력하세요."}
        value={value}
        onChange={onChnage}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;