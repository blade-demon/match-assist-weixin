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

$(function () {
  $("input[name='tabs']").change(TabsHandler);
  //
  // ToDo:
  //
});

/**
 * 通过unionid获取用户的GE信息,显示昵称，金豆，头像
 * @param    {String}    unionid         - 用户微信unionid
 */
function getGEInfo(unioid){
  return axios.get(`http://portal.gamepoch.com/GEPortal/api/Bets?unionid=${unionid}`);
}

/**
 * 获取竞猜记录，用于显示竞猜记录
 * @param     {String}    unionid         - 用户微信unionid
 * @return    {Promise}                   - 返回用户竞猜记录
 */
function getBetsRecord(unionid) {
  return axios.get('http://portal.gamepoch.com/GEPortal/api/Bets?unionid=${unionid}');
}

/**
 * 获得金豆明细记录，用于显示金豆变化情况
 * @param     {String}    unionid         - 用户微信unionid
 * @return    {Promise}                   - 返回金豆明细记录
 */
function getGoldDetail(unionid) {
  return axios.get('http://portal.gamepoch.com/GEPortal/api/GEGoldTradeRecords?unionid=${unionid}');
}

/**
 * 增加竞猜消耗记录页面元素
 * @param     {Object}    betData         - 竞猜记录数据 
 */
function addBetRecordElements(betData) {
  var betInProgressStr = `<li class="list-group-item list-item">
            <div class="item-left">
                <h5 class="bet-topic">${betTopic}</h5>
                <p class="small bet-consume">${betConsume}金豆</p>
                <p class="small bet-time">${betTime}</p>
            </div>
            <div class="item-right">
            <a href="/guess">
                <p class="grey">等待开奖
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </p>
                </a>
            </div>
          </li>`;
  var betEndStr = `<li class="list-group-item list-item">
          <div class="item-left">
            <h5 class="bet-topic">${betTopic}</h5>
            <p class="small bet-consume">${betConsume}金豆</p>
            <p class="small bet-time"${betTime}</p>
          </div>
          <div class="item-right">
            <a href="/guess">
                <p>
                    已开奖
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </p>
            </a>
          </div>
        </li>`;
}

/**
 * 增加金豆明细页面元素
 * @param     {Object}    goldDetailData  - 金豆明细信息
 */
function addGoldDetail(goldDetailData) {
  var htmlStr = `<li class="list-group-item list-item">
              <div class="item-left">
                  <h5>${goldTopic}</h5>
                  <p class="small">${goldTime}</p>
              </div>
              <div class="item-right">
                  <p>
                      <span class="gold-number">${goldNumber}&nbsp;</span>金豆</p>
              </div>
            </li>`;
}

// 检测radio选中的值, 切换Tab
function TabsHandler() {
  if ($(this).val() === 'record') {
    $("#content1").css("display", "block");
    $("#content2").css("display", "none");
  } else {
    $("#content1").css("display", "none");
    $("#content2").css("display", "block");
  }
}