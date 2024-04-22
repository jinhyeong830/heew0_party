const express = require('express');
const app = express();
const PORT = 8000;
const { sequelize } = require('./models');
const router = require('./routes');
// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));
app.use('/', router);

// sync부분은 첫페이지 렌더링 확인 후!
// force: true; 서버 실행마다 테이블 재생성
// force: false; 서버 실행시 테이블 없으면 생성
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`api-server ${PORT} is opened`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
