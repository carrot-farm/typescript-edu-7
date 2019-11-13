/** =================================================
 * ducks 패턴을 사용한 카운터 리덕스 모듈
 ================================================= */
// ===== Action type 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;


// ===== 액션 생성 함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

// ===== 액션 객체들에 대한 type 설정
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;


// ===== 상태의 타입과 상태의 초기값 선언
// # 타입 선언
type CounterState = {
  count: number;
};
// # 초기값 설정
const initialState: CounterState = {
  count: 0
};

// ===== 리듀서 작성
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;