# Morgan : Logger Library

## Format Options

Loggin Message Format Options

-   `:date`[format] ──> 날짜 형식
    -   [format] === clf ──> 10/Oct/2000:13:55:36 +0000
    -   [format] === iso ──> 2000-10-10T13:55:36.000Z
    -   [format] === web ──> Tue, 10 Oct 2000 13:55:36 GMT
-   `:req`[header] ──> 요청의 지정된 헤더 없는 경우 - 표시
-   `:res`[header] ──> 응답의 지정된 헤더 없는 경우 - 표시
    -   [header] === HTTP 메시지 헤더를 인자로 넣어주면 해당 헤더 확인가능
-   `:response-time`[digits] ──> 요청과 응답 기록 시간(시작) 사이의 시간(ms)
-   `:total-time`[digits] ──> 요청과 응답 기록 시간(종료) 사이의 시간(ms)
    -   [digits] === 시간 단위
-   `:http-version` ──> HTTP 버전
-   `:method` ──> HTTP 메서드
-   `:referrer` ──> Request 헤더의 referrer
-   `:remote-addr` ──> 요청의 원격 주소
-   `:remote-user` ──> 요청의
-   `:status` ──> 응답의 상태코드
-   `:url` ──> 요청 URL
-   `:user-agent` ──> 요청 헤더의 user-agent 기록

-   커스텀 포맷 생성 방법

    -   예시

```js
import morgan from "morgan";

morgan.token("Custom-Token-Id", (req: Request) => req.body); //  ──> :Custom-Token-Id로 사용
```

## format 설정 함수

```ts
const format = (tokens: TokenIndexer, req: Request, res: Response) => {
	return [tokens.method];
};
```

## morgan Option

```ts
interface ILogging_option extends Options<Request, Response> {
	buffer?: boolean | undefined; // 버퍼링 시간 설정
	immediate?: boolean | undefined; // 요청시 로깅
	skip?: (req: Request, res: Response) => boolean; // 스킵할 조건 작성
	stream?: StreamOptions | undefined; // 로깅하기 위한 스트림
}
```
