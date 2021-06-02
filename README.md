<!--
 * @Author: your name
 * @Date: 2021-06-01 20:14:15
 * @LastEditTime: 2021-06-02 20:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myBlog\README.md
-->
# 1.新建一个项目
```
npm init -y
```
# 2.安装依赖的模块
```
npm install body-parser cookie-parser debug ejs express morgan serve-favicon express-session connection-mongo mongoose connect-flash multer async -save

```
--save-dev = -D
--save = -S

#创建并初始化git
```
git init
git add -A
git commit -m "初始化项目和依赖的模块"
git remote add origin https:??github.com/zzzzz
git push origin master
```

#创建服务
express+mongoose
```javascript
let express = require('express')
let app = express()


app.listen(8080)
```

#跑通路由
