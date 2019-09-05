const routers = [
  {
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
    
  },
  {
    path: '/articlePage',
    component: (resolve) => require(['./views/articlePage.vue'], resolve)
  },
  {
    path: '/imgListPage',
    component: (resolve) => require(['./views/imgListPage.vue'], resolve)
  },
  {
    path: '/listPage',
    component: (resolve) => require(['./views/listPage.vue'], resolve)
  }
];
export default routers;