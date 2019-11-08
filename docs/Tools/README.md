#  常用的工类
## 1. 路径匹配
```javascript
// 自动匹配路径
const path = require('path');
function resovle(folderName) {
    return path.join(__dirName, folderName)
}
```
:::tip 提示
可用于在vue项目`vue.config.js`里配置`alias`。
:::

## 2. 时间戳
```javascript
// 时间格式 yyyy-MM-dd HH:mm:ss
function formatTime(time) {
  if (typeof time === 'string') {
      let str = time.split('.')[0] || '';
      str = str.replace(/T/g,' ');
      return str
  } else {
    return ""
  }
}
```
