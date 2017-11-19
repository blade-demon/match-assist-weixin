$(function () {

});


/**
 * 为选手添加比赛记录元素
 * @param     {Object}   gameRecordData  比赛记录
 */
function addCompetitorMatchElements(gameRecordData) {
  var html = `<div class="match-result-wrapper">
  <div class="match-result-wrapper-body">
      <div class="match-result-wrapper-body-left">
          <div class="player-detail">
              <img class="player-avatar" src="images/headimg.jpg" alt="">
              <p class="player-nickname">孙悟空</p>
              <p class="player-score">36</p>
          </div>
          <div class="player-detail">
              <img class="player-avatar" src="images/headimg.jpg" alt="">
              <p class="player-nickname">大波女孩</p>
              <p class="player-score lose">38</p>
          </div>
      </div>
      <div class="match-result-wrapper-body-right">
          <p class="bold-font lose">Lose</p>
      </div>
  </div>
  <div class="match-result-wrapper-footer">
      <p class="match-date small-font smallsize-font">2017-11-21 星期一 13:52</p>
      <p class="match-location small-font smallsize-font" style="text-align: right">塞伯坦星球</p>
      <p class="match-location small-font smallsize-font" style="text-align: right">查看视频</p>
  </div>
</div>`;
}


/**
 * 通过unionid获取用户的GE信息
 * @param    {String}    unionid    - 用户的微信unionid
 */
 function getGEUserInfo(unionid) {
    return axios.get(`http://portal.gamepoch.com/GEPortal/api/Matches?unionid=${unionid}`);
 }

/**
 * 通过unionid获取用户的比赛情况，用于显示用户的战绩
 * @param     {String}    unionid    - 微信用户unionid
 */
function getUserMatchHistory(unionid) {
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/Matches?unionid=${unionid}`);
}