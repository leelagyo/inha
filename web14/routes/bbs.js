var express = require('express');
var router = express.Router();

/* 게시판 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'bbs/list.ejs' });
});


/* 게시글 등록 */
router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName:'bbs/insert.ejs' });
});

/* 게시글 정보 */
router.get('/read', function(req, res, next) {
  const id = req.query.id;
  res.render('index', { title: '게시글정보', pageName:'bbs/read.ejs', id });
});


/* 게시글 수정 */
router.get('/update', function(req, res, next) {
  const id = req.query.id;
  res.render('index', { title: '게시글수정', pageName:'bbs/update.ejs', id });
});

router.get('/reply', function(req, res, next) {
  const id = req.query.id;
  res.render('index', { title: '댓글관리', pageName:'bbs/reply.ejs', id });
});

module.exports = router;