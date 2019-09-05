<style scoped lang="less">
    .img-list-page {
        .breadcrumb {
            background: #003a7f;
            
            .breadcrumb-title {
                margin: 0 auto;
                width: 1200px;
                height: 50px;
                padding-left: 10px;
                line-height: 50px;
                text-align: left;
                font-size: 1.8rem;
                color: #ffffff;
                
            }
        }
        
        .article-box {
            text-align: left;
            font-size: 2.8rem;
            margin: 0 auto;
            width: 1200px;
            padding-left: 10px;
            
            .article-text {
                font-size: 1.4rem;
                box-shadow: 3px 3px 7px #4d5669;
                padding: 10px;
                margin: 5px 0 50px;
                text-align: center;
                
                
                .page-page {
                    margin: 0 auto;
                }
                
                .img-list-box {
                    margin-bottom: 10px;
                    overflow: hidden;
                    cursor: pointer;
    
                    img {
                        width: 100%;
                    }
                    
                    .img-list-title {
                        text-align: center;
                        font-size: 1.4rem;
                        
                    }
                    
                    .img-list-text {
                        text-align: left;
                        font-size: 1.4rem;
                    }
                    
                    .lookMore {
                        color: #004eab;
                    }
                }
                
            }
            
            .side-nav {
                font-size: 1.4rem;
                
                .side-nav-box {
                    float: right;
                    width: 140px;
                    
                    .side-nav-box-title {
                        border-bottom: 1px solid #c1c1c1;
                        padding-bottom: 10px;
                        margin-bottom: 10px;
                    }
                    
                    p {
                        color: #004eab;
                    }
                }
                
            }
        }
        
        @media (max-width: 992px) {
            .article-box, .breadcrumb-title {
                width: 100%;
            }
            
            .side-nav {
                display: none;
            }
        }
    }
</style>
<template>
    <div class="img-list-page">
        <div class="breadcrumb">
            <p class="breadcrumb-title">公司信息</p>
        </div>
        <div class="article-box">
            <p class="page-name">公司简介</p>
            <Row>
                <Col :xs="24" :sm="24" :md="20" :lg="20" class="article-text">
                    <Row :gutter="20">
                        <Col :xs="24" :sm="24" :md="12" :lg="12" class="img-list-box">
                            <img src="../images/3.jpg">
                            <div class="img-list-title">bula ls法巴洛克接待来访</div>
                            <div class="img-list-text">ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访
                                <span class="lookMore">...查看更多</span>
                            </div>
                        
                        </Col>
                        <Col :xs="24" :sm="24" :md="12" :lg="12" class="img-list-box">
                            <img>
                            <div class="img-list-title">bula ls法巴洛克接待来访</div>
                            <div class="img-list-text">ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访
                                <span class="lookMore">...查看更多</span>
                            </div>
                        
                        </Col>
                    </Row>
                    <Row :gutter="20">
                        <Col :xs="24" :sm="24" :md="12" :lg="12" class="img-list-box">
                            <div class="img-list-title">bula ls法巴洛克接待来访</div>
                            <div class="img-list-text">ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访
                                <span class="lookMore">...查看更多</span>
                            </div>
        
                        </Col>
                        <Col :xs="24" :sm="24" :md="12" :lg="12" class="img-list-box">
                            <img src="../images/3.jpg">
    
                            <div class="img-list-title">bula ls法巴洛克接待来访</div>
                            <div class="img-list-text">ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访ls法巴洛克接待来访
                                <span class="lookMore">...查看更多</span>
                            </div>
        
                        </Col>
                    </Row>
                    <template class="page-page">
                        <Page :total="100"/>
                    </template>
                </Col>
                <Col :xs="24" :sm="24" :md="4" :lg="4" class="side-nav">
                    <div class="side-nav-box">
                        <div class="side-nav-box-title">快捷链接</div>
                        <p>公司简介</p>
                        <p>不拉巴拉</p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>