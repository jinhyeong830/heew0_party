const { Comment } = require('../models');

exports.main = async (req, res) => {
  const allComment = await Comment.findAll();
  console.log('모든 코멘트', allComment);
  console.log(allComment[0].registered_date);
  res.render('index', { data: allComment });
};

exports.registerComment = async (req, res) => {
  console.log(req.body);
  /* 
comment_id (auto_increment)
nickName
comment_content
registered_date (default 자동 설정)
createdAt(자동 설정)
updatedAt(자동 설정)
dayjs lib사용해보기
    */
  const createData = await Comment.create({
    nickName: req.body.nickname,
    comment_content: req.body.content,
  });
  console.log(createData);

  res.send(true);
};
