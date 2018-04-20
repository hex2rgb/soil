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
   │    ├─ fonts  字体
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
   │    │
   │    └─ 
   │   
   │
   ├─ layouts 布局组件 container
   │    ├─ compontens
   │    │   ├─ footer
   │    │   ├─ header
   │    │   ├─ aside
   │    │   ├─ nav 顶部导航
   │    │   └─
   │    │   
   │    └─  layouts.vue 
   │       
   │
   ├─ router 路由配置  
   │
   │
   └- store  状态树(组件传参, 状态维护)

```

## 参考文档
- [webpack](https://webpack.js.org/)
- [eslint](https://eslint.org/)
- [jenkins](https://jenkins.io/)
- [stylelint](https://stylelint.io/)
- [karma](http://karma-runner.github.io/2.0/index.html)
