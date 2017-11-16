# 电竞助手-微信

## 页面
   个人信息首页: https://match-assist-weixin-ziweigamepoch.c9users.io/                     
   对手信息页面: https://match-assist-weixin-ziweigamepoch.c9users.io/competitor           
   金币消费历史: https://match-assist-weixin-ziweigamepoch.c9users.io/gold_record      
   个人信息首页2（未参加比赛）: https://match-assist-weixin-ziweigamepoch.c9users.io/index2               
   直播页面: https://match-assist-weixin-ziweigamepoch.c9users.io/live                 
   没有直播页面: https://match-assist-weixin-ziweigamepoch.c9users.io/no-live              
   赛事视频: https://match-assist-weixin-ziweigamepoch.c9users.io/recommend_videos           
   竞猜结果分享: https://match-assist-weixin-ziweigamepoch.c9users.io/result_share         
   金豆商城: https://match-assist-weixin-ziweigamepoch.c9users.io/store                
   对手视频: https://match-assist-weixin-ziweigamepoch.c9users.io/video  
   更多视频: https://match-assist-weixin-ziweigamepoch.c9users.io/videos  
   竞猜结果: https://match-assist-weixin-ziweigamepoch.c9users.io/guess



# API
  ## 用户类
  1. 获取所有用户信息：http://portal.gamepoch.com/GEPortal/api/GEUsers
  2. 获取用户信息通过ID：http://portal.gamepoch.com/GEPortal/api/GEUsers/${ID}
  3. `通过unionid查找用户信息: http://portal.gamepoch.com/GEPortal/api/GEUsers?unionid=${unionid}`
  4. `根据用户信息获得用户的胜场和负场`

  ## 金豆类
  1. `获得金豆交易类型：http://portal.gamepoch.com/GEPortal/api/GEGoldTradeCodes`
  2. 获得金豆交易记录：http://portal.gamepoch.com/GEPortal/api/GEGoldTradeRecords
  3. 获得金豆交易记录通过ID：http://portal.gamepoch.com/GEPortal/api/GEGoldTradeRecords/${ID}

  ## 赛事类
  1. 获得所有赛事：http://portal.gamepoch.com/GEPortal/api/Tournaments
  2. 获取指定赛事通过ID：http://portal.gamepoch.com/GEPortal/api/Tournaments/${ID}
  
  ## 比赛类
  1. 获得所有比赛：http://portal.gamepoch.com/GEPortal/api/Matches
  2. 获得指定比赛：http://portal.gamepoch.com/GEPortal/api/Matches/${ID}
  3. `根据用户unionid查找已经参加的比赛信息`
  4. `根据用户unionid查找下一场比赛信息`

  ## 竞猜类
  1. `根据用户ID获取竞猜记录,竞猜记录包含信息：`
    > 竞猜名称/任务名称
    > 竞猜时间/任务完成时间
    > 竞猜状态/任务状态（是否已经结束）
    > 下注金额，获得金额（举例：+100/-100）
  
