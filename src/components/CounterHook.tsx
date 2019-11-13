/** =======================================
 * 프레젠테이션 / 컨테이너 패턴이 아닌 커스텀 Hook 패턴을 사용한 컴포넌트
 ======================================= */
import React from 'react';
import useCounter from '../hooks/useCounter';


// ===== 컴포넌트
function CounterHook() {
  const {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  )
}

// ===== export
export default CounterHook;