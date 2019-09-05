<style scoped lang="less">
    @import 'styles/common.css';
    
    .nav-min-box {
        display: none;
    }
    
    .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
        padding: 0 5px;
    }
    
    @media (max-width: 992px) {
        .header {
            width: 100%;
        }
        
        .nav-box {
            display: none;
        }
        
        .nav-min-box {
            display: inline-block;
        }
    }
</style>
<template>
    <div class="main">
        <header class="header">
            <div class="logo">
                <img class="logo-img" src="./images/logo.png">
                <span class="title">中矿智信</span>
            </div>
            <div class="nav-box">
                <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="navClick">
                    <template v-for="(item) in navItem">
                        <MenuItem :name="item.title" v-if="!item.item">{{item.title}}</MenuItem>
                        <Submenu :name="item.title" v-if="item.item">
                            <template slot="title">{{item.title}}</template>
                            <MenuItem :name="items.title" v-for="(items) in item.item">{{items.title}}</MenuItem>
                        </Submenu>
                    </template>
                </Menu>
            </div>
            <div class="nav-min-box" @click="navMin">
                <Icon size="40" type="ios-list"/>
            </div>
            <div class="prop-nav-box" v-if="showPropNav" @click="propNav">
                <div class="prop-nav-bg">
                    <Menu :theme="theme1" active-name="1" @on-select="navClick"  width="100%">
                        <template v-for="(item) in navItem">
                            <MenuItem :name="item.title" v-if="!item.item">{{item.title}}</MenuItem>
                            <Submenu :name="item.title" v-if="item.item">
                                <template slot="title">{{item.title}}</template>
                                <MenuItem :name="items.title" v-for="(items) in item.item">{{items.title}}</MenuItem>
                            </Submenu>
                        </template>
                    </Menu>
                </div>
            </div>
        </header>
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <div class="footer-contacts">
                <Row>
                    <Col :xs="24" :sm="24" :md="12" :lg="12" class="contacts-text">
                        <div class="contacts-box">
                            <div class="contacts-text">
                                <p class="contacts-title">联系我们</p>
                                <p>
                                    <Icon type="ios-home"/>
                                    中国 北京市 石景山路22号 长城大厦701室
                                </p>
                                <p>
                                    <Icon type="ios-call"/>
                                    010-88682561
                                </p>
                                <p>
                                    <Icon type="ios-mail"/>
                                    China@sinomine.com.cn
                                </p>
                            </div>
                        </div>
                    
                    </Col>
                    <Col :xs="24" :sm="24" :md="12" :lg="12" class="qr-code">
                        <img class="qr-img" src="./images/2.jpg">
                    </Col>
                </Row>
            </div>
            <div class="footer-text">北京中矿智信科技有限公司-保留所有权利 京ICP备05042625号</div>
        </footer>
    </div>
</template>
<script>
  import * as WebSiteService from './service/WebSiteService';
  
  export default {
    data() {
      return {
        theme1: 'light',
        showPropNav: false,
        navItem: [
          {name: 'home', title: '首页'},
          {
            name: '2', title: '公司概况', item: [
              {name: '2-1', title: '公司简介'},
              {name: '2-2', title: '公司资质'},
              {name: '2-3', title: '客户分布'}
            ]
          },
          {
            name: '3', title: '热点新闻', item: [
              {name: '3-1', title: '行业新闻'},
              {name: '3-2', title: '公司新闻'},
              {name: '3-3', title: '活动通知'}
            ]
          },
          {
            name: '4', title: '产品与服务', item: [
              {name: '4-1', title: '产品'},
              {name: '4-2', title: '服务'},
            ]
          },
          {
            name: '5', title: '支持与培训', item: [
              {name: '5-1', title: '培训课程'},
              {name: '5-2', title: '在线学习'},
              {name: '5-3', title: '问题与解答'},
            ]
          },
          {
            name: '6', title: '成功案例', item: [
              {name: '6-1', title: '国际案例'},
              {name: '6-2', title: '国内案例'},
            ]
          },
          {name: '7', title: '下载中心'},
          {name: '8', title: '企业招聘'},
          {name: '9', title: '会员注册'},
        ]
      }
    },
    mounted() {
      
      WebSiteService.test1((respPayload) => {
        console.log(`respPayload: ${respPayload.patientId}`)
      }, (error) => {
        console.error(`出现错误，errMsg: ${error}`);
      });
      
    },
    beforeDestroy() {
    
    },
    methods: {
      
      navMin() {
        this.showPropNav = true;
      },
      propNav() {
        this.showPropNav = false;
        
      },
      navClick(name) {
        console.log('articlePage' + name);
        if (name == '首页') {
          this.$router.push({path: '/'});
        } else if (name == '公司简介') {
          this.$router.push({path: '/articlePage'});
        } else if (name == '产品') {
          this.$router.push({path: '/imgListPage'});
        } else if (name == '公司新闻') {
          this.$router.push({path: '/listPage'});
        }
      }
    }
  }
</script>
