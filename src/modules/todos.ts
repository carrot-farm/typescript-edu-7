// ===== action type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;


// ===== 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});


// ===== 액션들의 타입스크립트 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;


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
function todos(state: TodosState = initialState, action: TodosAction) {
  switch (action.type) {
    // # 추가
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    // # 토글
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      )
    // # 삭제
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    // # default
    default:
      return state;
  }
}

export default todos;