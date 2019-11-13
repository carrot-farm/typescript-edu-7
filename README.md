# Typescript & 리덕스

## 참고
[veloeprt님의 velog](https://velog.io/@velopert/use-typescript-and-redux-like-a-pro)



## 목차
* [준비](#준비)
* [Action Type 선언](#Action-Type-선언)
* [액션 생성 함수 선언](#액션-생성-함수-선언)


## 준비
* 리덕스 관련 패키지 설치
   * `@types/...`는 타입 스크립트 관련 라이브러리.
   * [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 에서 관련 라이브러리들 확인 가능.
```shell
$ yarn add redux react-redux @types/react-redux
```


## Action Type 선언
* type을 선언할 때 는 다음과 같이 `as const` 라는 키워드를 붙여줘야 한다.
   * `as const`는 **const assertions**라는 type script 문법으로 추후 액션 객체를 만들었을 때 `type`이 문자열을 나타내지 않고 실제값을 가리키게 된다.
```typescript
const INCREASE = 'counter/INCREASE' as const;
```


## 액션 생성 함수 선언
```typescript
export const increase = ({type: INCREASE});
// 파라메터를 받아올 경우.
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
})
```

## 액션 객체들에 대한 Type 설정
* `ReturnType` 은 함수에서 반환하는 타일을 가져올 수 있게 해주는 유틸 타입.
   * Action Type 선언시 `as const` 를 사용하지 않았으면 `ReturnType` 선언시 `string`으로 처리된다.
```typescript
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
```



## 상태의 타입과 상태의 초기값 선언
```typescript
type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};
```



## 리듀서 작성하기
```typescript
function counter(state: CounterState = initialState, action: CounterAction){
  switch(action.type){
    case INCREASE:
      return { count: state.count + 1 };
    default:
      return state;
  }
}
export default counter;
```