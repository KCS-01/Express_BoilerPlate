# Express(TypeScript)

## 디렉토리 구조

```
.root                                  ───> `루트 디렉토리`
│
├─ index.ts                            ───> `엔트리 포인트`
├─ app.ts                              ───> 서버(앱) 클래스 파일
├─ middlewars                          ───> 미들웨어 설정 디렉토리
├─ interface                           ───> 타입 인터페이스 디렉토리
├─ config                              ───> 사용할 설정 변수 디렉토리
├─ tests                               ───> 테스트 코드 작성 디렉토리(Jest)
├─ src                                 ───> 소스 코드 디렉토리
│   │
│   └─ example
│         ├─ example.module.ts         ───> 의존성 주입
│         ├─ example.router.ts         ───> 라우터 세부 경로 설정
│         ├─ example.controller.ts     ───> 컨트롤러 파일
│         ├─ example.service.ts        ───> 서비스
│         └─ example.repository.ts     ───> 레포지토리
│
└─ tsconfig.json  ───>  컴파일 설정, 별칭(@) 추가시 paths에 작성 필수
```
