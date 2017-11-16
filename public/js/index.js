// 通过微信获取的信息
var userInfo = {
  "openid": "o8ibBtyqmYgtYb_7UDkUYpKYp5wg",
  "nickname": "M",
  "sex": 1,
  "language": "zh_CN",
  "city": "晋中",
  "province": "山西",
  "country": "中国",
  "headimgurl": "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er63x6KQtGxacKpBBLhXiaTMJZuW4aJYKX2NqR9pAzXCesuG2YMYepyn7t2ttt9KXvPz6ZILr94fqA/0",
  "unionid": "opeVYs2G3hw4SZhTcC0Pb2kPR-4c"
  // "GEAccount": "24324323",
  // "GEGold": 10000
};

var $profileHeadimg = $(".profile-headimg");
var $profileNickName = $(".profile-nickname");
var $profileID = $(".profile-id");
var $profileGold = $("#goldNumber");
var $profileGoldGuessRecord = $("#goldGuessRecord");

// 页面加载完成
$(document).ready(function () {
  console.log("document ready!");
  // TODO:获得GE信息
  // getGEInfo(unionid).then(function(result){
  //   console.log(result);
  //   userInfo.GEAccount = result.GEAccount;
  //   userInfo.GEGold = result.GEGold;
  // });
  // TODO:设置UI界面
  setUI(userInfo);
});

/**
 * 通过微信信息获取用户在Gamepoch的信息
 * @param  {String}      unionid        - 微信unoinid
 * @return {Promise}     {Promise}      - 返回用户在Gamepoch的信息
 */
function getGEInfo(unionid) {
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/GEUsers?unionid=${unionid}`);
}

/**
 * 通过微信用户信息设置界面UI
 * @param userInfo   { Object }     - 用户信息
 */
function setUI(userInfo) {
  $profileHeadimg.attr("src", userInfo.headimgurl);
  $profileNickName.text(userInfo.nickname);
  $profileID.text(userInfo.GEAccount);
  $profileGold.text(userInfo.GEGold);
  $profileGoldGuessRecord.attr("href", `/gold_record?GEAccount=${userInfo.GEAccount}`);
}