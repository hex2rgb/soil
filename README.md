# new_tech

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build  <production|development>  <//127.0.0.1:8005/>(末尾必须有斜杠'/',否则导致资源加载正常,但是路由空白不能正常跳转)

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Structure

```markdown

Projet
└─ src
   ├─ assets  资源
   │    ├─ images  图片资源
   │    ├─ video  视频资源
   │    └─ audio  音频资源
   │   
   │   
   ├─ styles 样式
   │    ├─ base 
   │    │  ├─ normalize.scss 样式修复(修复一些浏览器的bug)
   │    │  └─ reset.scss 初始化样式覆盖(各浏览器风格统一)
   │    │   
   │    │   
   │    ├─ helpers 
   │    │    ├─ helpers.scss
   │    │    ├─ mixin.scss
   │    │    └─ function.scss
   │    │    
   │    └─ index.scss
   │     
   │     
   ├─ utils
   │   ├─ request.js 请求方法
   │   ├─ 
   │   └─ 
   │    
   │        
   ├─ plugins 插件
   │   ├─ 
   │   ├─ 
   │   └─     
   │          
   │          
   ├─ service 异步请求(列表,基础数据)
   │    ├─ _api.js 
   │    ├─ getData.js
   │    └─       
   │            
   ├─ directive 指令
   │    ├─ 
   │    └─ 
   │   
   │   
   ├─ filter 过滤器
   │    ├─  
   │    ├─   
   │    └─ 
   │   
   │   
   ├─ pages/view 完整页面(路由切换时展现的完整view)
   │    ├─  home 主文件夹
   │    │    ├─  children 子路由
   │    │    │       ├─ c1.vue
   │    │    │       └─ c2.vue
   │    │    │        
   │    │    │       
   │    │    └─  home.vue 主页面
   │    │    
   │    ├─  login
   │    ├─  
   │    └─ 
   │     
   │     
   ├─ compontens 
   │    ├─ common 公共组件
   │    │    ├─ table  
   │    │    └─ alert  
   │    │    
   │    ├─ footer 
   │    ├─ header
   │    ├─ aside 
   │    ├─ nav 顶部导航
   │    └─ 
   │   
   │   
   ├─ layouts 布局组件 container
   │
   │
   ├─ router 路由配置  
   │
   │
   └- store  状态树(组件传参, 状态维护)

```
## demo run
- vue项目build
- 将dist下的static放到'vue_static'下的public里面  `npm i` -> `npm start`
- 将index.html放到'node_service'下的public里面 `npm i` -> `npm start`
- 访问http://127.0.0.1:8006/

## 规则
   - scss
     + 项目定义类名、id、属性等使用 `^[a-z0-9\_\-]+$`
     + function 使用全小写英文 
     + 框架等其他依赖不做限制
     
   - js
     + 命名小驼峰
     + 函数最大形参 4个
     + 允许匿名函数
     + 字符串单引号
     + 注释符号前后空格
     + 禁止alert
     + 最大空白行 1行
     + 禁止结尾逗号
     + 强制结尾分号
     
   - html
     + 每行最大长度100字符
   
   - 文件
     + 命名 `^[a-z0-9\\-_./]+$|^src/App.vue$`
