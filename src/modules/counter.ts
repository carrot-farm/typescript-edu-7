/** =================================================
 * ducks 패턴을 사용한 카운터 리덕스 모듈
 ================================================= */
import { createAction, ActionType, createReducer } from 'typesafe-actions';

// ===== Action type 선언(`as const` 사용)
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
// ===== Action type 선언(`typesafe-actions` 사용)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';


// ===== 액션 생성 함수 선언(기본 형태)
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });
// ===== 액션 생성 함수 선언(`createAction` 사용)
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
// payload 타입은 제네릭을 이용해 넣어준다.
export const increaseBy = createAction(INCREASE_BY)<number>(); // (payload: number) => ({type: INCREASE_BY, payload})



// ===== 액션 객체들에 대한 type 설정(기본형태)
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;
// ===== 액션 객체들에 대한 type 설정('ActionType' 유틸 사용)
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;



// ===== 상태의 타입과 상태의 초기값 선언
// # 타입 선언
type CounterState = {
  count: number;
};
// # 초기값 설정
const initialState: CounterState = {
  count: 0
};



// ===== 리듀서 작성(기본형태)
// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
// ===== 리듀서 작성('createReducer' 작성)
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
})

export default counter;