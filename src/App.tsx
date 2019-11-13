import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CounterHook from './components/CounterHook';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return <>
    <section style={{ marginBottom: '20px' }}>
      <h2>프레젠티이션 / 컨테이너 패턴</h2>
      <CounterContainer />
      <hr />
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2>커스텀 Hook을 사용한 패턴</h2>
      <div style={{ fontSize: '0.8rem' }}>
        . connect()를 사용해 props를 주입하지 않아도 된다.
      </div>
      <CounterHook />
      <hr />
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2>TodoList</h2>
      <TodoInsert />
      <TodoList />
      <hr />
    </section>
  </>;
}

export default App;
