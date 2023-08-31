﻿
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {
        name: '注册账号',
        path: '/user/register',
        component: './User/Register',
      },
    ],
  },
  {path: '/', name: '欢迎', icon: 'smile', component: './Welcome'},
  {path: '/interface', name: '接口广场', icon: 'RedditOutlined', component: './InterfaceSquare'},
  {path: '/pay/:id', icon: "PayCircleOutlined", name: '支付', component: './Pay',hideInMenu: true,},
  {path: '/recharge', icon: "PayCircleOutlined", name: '购买积分', component: './Recharge'},
  {
    path: '/account/center', name: '个人信息', icon: 'UserOutlined', component: './User/UserInfo', hideInMenu: true,
  },
  {
    path: '/my_interface', name: '我的接口', icon: 'ApiOutlined', component: './MyInterface'
  },
  {
    path: '/interface_info/:id',
    name: '接口详情',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理',
        icon: 'ApiOutlined',
        path: '/admin/interface/list',
        component: './Admin/InterfaceInfoList',
      },
      {
        name: '商品管理',
        icon: 'table',
        path: '/admin/productInfo/list',
        component: './Admin/ProductInfo',
      },
    ],
  },
  {path: '*', layout: false, component: './404'},
];