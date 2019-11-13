import { combineReducers } from 'redux';
import counter from './counter';

// ===== root reducer 설정
const rootReducer = combineReducers({
  counter
});

export default rootReducer;

// ===== RootReducer 타입 설정
export type RootState = ReturnType<typeof rootReducer>;