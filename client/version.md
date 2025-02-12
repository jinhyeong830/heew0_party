## client 설치한 패키지

- react-router-dom
  header 만들어서 특별한 페이지 (방명록이라든지) 만들고 싶음
- react-calendar, dayjs
  초대장 류에서 가장 중요한 달력을 구현하기 위해
- axios, sass, styled-components
  리액트 사용 기본.. api 연동과 스타일을 위한..

npm (run) start 와 npm run dev는 현재로서는 같은 명령어
클라이언트단에서는 따로 개발버전과 배포버전에서의 명령어를 나눠놓지 않았음

---

## 프로젝트 구조

- 기본적으로 atomic design pattern 따르고 있음
  - 디자인패턴과 아키텍처 패턴? 차이점 바로 알 수 있도록 정리 필요할 듯

```bash
├── components
│   ├── atoms
│   ├── molecules
│   └── organism
├── pages
├── styles
├── utils
│   ├── constant.ts
│   └── utils.ts
└── hooks
```
