/** =================================================
 * 메서드 체이닝 방식을 사용한 모듈
 * . `handleAction`의 첫번째 파라메터에 액션의 문자열 타입외에도
 * 액션 생성 함수를 넣어도 작동한다.
 ================================================= */
import { createAction, createReducer } from 'typesafe-actions';

// ===== 액션 타입
export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
// payload 값은 제네릭을 이용해 넣어준다.
export const increaseBy = createAction('counter/INCREASE_BY')<number>();

// ===== state의 타입
type CounterState = {
  count: number;
}

// ===== 초기 상태값
const initialState: CounterState = {
  count: 0,
};


// ===== 리듀서
const counter = createReducer(initialState)
  .handleAction(increase, (state: any) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state: any) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state: any, action: any) => ({
    count: state.count + action.payload
  }))

export default counter;