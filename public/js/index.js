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
  // "GEGold": 10000
};

// 获取页面元素
var $profileHeadimg = $(".profile-headimg");
var $profileNickName = $(".profile-nickname");
var $profileID = $(".profile-id");
var $profileGold = $("#goldNumber");
var $profileGoldGuessRecord = $("#goldGuessRecord");
var $tournaments = $(".tournament-wrapper");
// 没有比赛信息添加元素
var NO_MATCHINFO_TEMPLATE = `<div class="row nomatch-container-wrapper">
<div class="divider-container">
    <h3 class="title"><span> 我的赛程 </span>
    </h3>
</div>
<div class="col-xs-12 text-light">
    <p class="text-left">我的比赛呢？</p>
    <p class="text-right">我想蒂花之秀！</p>
    <p class="text-left">你这么怂哪里的比赛？</p>
    <p class="text-right">请开始你的表演！</p>
</div>
</div>`;

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
 * @param  {String}      unionid       - 微信unoinid
 * @return {Promise}     Promise       - 返回用户在Gamepoch的信息
 */
function getGEInfo(unionid) {
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/GEUsers?unionid=${unionid}`);
}

/**
 * 获取当前所有赛事
 */
function getGETournaments() {
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/Tournaments`);
}

/**
 * 获取用户的所有比赛场次详细信息，
 * @param   {String}     unionid       - 微信unionid
 */
function getGEMatchHistory(unionid) {
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/GEUsers?unionid=${unionid}`);
}

/**
 * 通过微信用户信息设置界面UI
 * @param  { Object }    userInfo      - 用户信息
 */
function setUI(userInfo) {
  $profileHeadimg.attr("src", userInfo.headimgurl);
  $profileNickName.text(userInfo.nickname);
  $profileID.text(userInfo.GEAccount);
  $profileGold.text(userInfo.GEGold);
  $profileGoldGuessRecord.attr("href", `/gold_record?unionid=${userInfo.unionid}`);
}