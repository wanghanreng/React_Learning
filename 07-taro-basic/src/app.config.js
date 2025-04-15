/* eslint-disable no-undef */
export default defineAppConfig({
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  pages: [
    'pages/index/index',
    'pages/discover/discover',
    'pages/profile/profile',
    'pages/product/product',
    'pages/login/login',
    'pages/music/music',
    'pages/account/account',
    'pages/BusinessCard/BusinessCard',
    'pages/component/component',
    'pages/basic/basic',
    'pages/container/container',
    'pages/form/form',
    'pages/media/media',
    'pages/skyline/skyline',
    'pages/contact/contact',
    'pages/device/device',
    'pages/map/map',
    'pages/dingwei/dingwei',
    'pages/api/index',
    'pages/news/news',
    'pages/movable/movable',
    'pages/baidu/baidu',
    'pages/other/other'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4594D5',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#1296db',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/tabs/home.png',
        selectedIconPath: './assets/tabs/home-active.png'
      },
      {
        pagePath: 'pages/discover/discover',
        text: '发现',
        iconPath: './assets/tabs/discover.png',
        selectedIconPath: './assets/tabs/discover-active.png'
      },
      {
        pagePath: 'pages/component/component',
        text: '组件',
        iconPath: './assets/tabs/component.png',
        selectedIconPath: './assets/tabs/component-active.png'
      },
      {
        pagePath: 'pages/api/index',
        text: 'API',
        iconPath: './assets/tabs/Api.png',
        selectedIconPath: './assets/tabs/Api-active.png'
      },
      {
        pagePath: 'pages/profile/profile',
        text: '我的',
        iconPath: './assets/tabs/profile.png',
        selectedIconPath: './assets/tabs/profile-active.png'
      },
    ],
  },
})

