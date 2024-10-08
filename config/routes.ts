﻿export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/add_chart' },
  { name: '智能分析(同步)', path: '/add_chart', icon: 'barChart', component: './AddChart' },
  {
    name: '智能分析(异步)',
    path: '/add_chart_async',
    icon: 'barChart',
    component: './AddChartAsync',
  },
  {
    name: '智能分析(异步消息队列)',
    path: '/add_chart_async_mq',
    icon: 'barChart',
    component: './AddChartAsyncMq',
  },
  { name: '我的图表', path: '/my_chart', icon: 'pieChart', component: './MyChart' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
