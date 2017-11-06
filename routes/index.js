var express = require('express');
var router = express.Router();

/**
 * 查看已参加比赛选手信息
 */
router.get('/', function(req, res, next) {
    res.render('index');
});

/**
 * 查看为参加比赛的选手信息
 */
router.get('/index2', function(req, res, next) {
    res.render('index2');
});

/**
 * 查看竞争对手信息
 */
router.get('/competitor', function(req, res, next) {
    res.render('competitor');
});

/**
 * 赛事回放
 */
router.get('/replay', function(req, res, next) {
    res.render('replay');
});

/**
 * 查看对战视频
 */
router.get('/video', function(req, res, next) {
    res.render('video');
});

/**
 * 查看直播
 */
router.get('/live', function(req, res, next) {
    res.render('live');
});

/**
 * 消费记录
 */
router.get('/consume_history', function(req, res, next) {
    res.render('consume_history');
});
/**
 * 没有直播
 */
router.get('/no-live', function(req, res, next) {
    res.render('no-live');
});

/**
 * 竞猜结果分享
 */
router.get('/result_share', function(req, res, next) {
    res.render('result_share');
});

/**
 * 金豆商城
 */
router.get('/store', function(req, res, next) {
    res.render('store');
});
module.exports = router;