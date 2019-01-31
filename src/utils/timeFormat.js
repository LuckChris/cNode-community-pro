function timeago (time) {
  var t = time.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  var formatTime = new Date(t).getTime()
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var week = day * 7
  var month = day * 30

  var now = new Date().getTime()
  var diffValue = now - formatTime
  if (diffValue > 0) {
    var minC = diffValue / minute
    var hourC = diffValue / hour
    var dayC = diffValue / day
    var weekC = diffValue / week
    var monthC = diffValue / month
    if (monthC >= 1) {
      return parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
      return parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      return parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      return parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      return parseInt(minC) + '分钟前'
    } else {
      return '刚刚'
    }
  }
}
export {timeago}
