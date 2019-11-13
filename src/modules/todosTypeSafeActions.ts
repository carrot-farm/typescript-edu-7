/** =================================================
 * typesafe-action 를 사용해 코드를 줄인 결과
 ================================================= */
import { createAction, ActionType, createReducer } from 'typesafe-actions';

// ===== action type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';



// ===== 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();



// ===== 액션들의 타입스크립트 타입 준비
const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;



// ===== 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];



// ===== 초기값 설정
const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용하기', done: true },
  { id: 3, text: '투두 리스트 만들기', done: false },
]


// ===== 리듀서 작성
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
})
export default todos;