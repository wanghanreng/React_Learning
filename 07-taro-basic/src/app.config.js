/* eslint-disable no-undef */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discover/discover',
    'pages/profile/profile',
    'pages/product/product',
    'pages/login/login',
    'pages/music/music',
    'pages/account/account',
    'pages/BusinessCard/BusinessCard'
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
        pagePath: 'pages/profile/profile',
        text: '我的',
        iconPath: './assets/tabs/profile.png',
        selectedIconPath: './assets/tabs/profile-active.png'
      },
    ],
  },
})

