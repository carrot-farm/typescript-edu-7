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

## 액션 객체들에 대한 Type 준비
```typescript
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
```