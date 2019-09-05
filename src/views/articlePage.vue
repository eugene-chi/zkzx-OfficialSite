<style scoped lang="less">
    .article-page {
        
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
                
                .article-text-title {
                    font-size: 1.8rem;
                    text-align: center;
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
                    p{
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
    <div class="article-page">
        <div class="breadcrumb">
            <p class="breadcrumb-title">公司信息</p>
        </div>
        <div class="article-box">
            <p class="page-name">公司简介</p>
            <Row>
                <Col :xs="24" :sm="24" :md="20" :lg="20" class="article-text">
                    <p class="article-text-title">北京中矿智信科技有限公司</p>
                    北京中矿智信科技有限公司（Beijing Sinomine Smartech
                    Inc.）前身是Gemcom国际Surpac软件中国办事处，是全球知名矿业软件Surpac、Minex、MineSched、Whittle、InSite和PCBC 在中国的唯一总代理。
                    自成立以来一直致力于国内数字化矿山的推广和建设。将世界先进的三维矿业软件及解决方案引进国内，成为国内数字化矿山建设的引领者。公司总经理栾忠先生拥有10年设计院工作经验和多年数字矿山软件实施经验。
                    
                    Gemcom国际软件公司于2013年与法国达索公司合并，成立达索GEOVIA公司，是全球最大的矿业解决方案公司，解决方案涵盖勘探、评估、设计、优化、进度计划、矿山生产管理等领域，市场份额高达35-40%。全世界前十强的矿业公司，都在用达索Geovia公司的软件。Surpac软件作为达索系统GEOVIA公司旗下最著名的软件之一，在全球90多个国家中有6000多家用户，特别是许多金属、贵金属矿业公司都是Surpac三维矿业软件的忠实用户。如：
                    BHP/ Billiton（必和必拓）；WMC Resources Ltd（西部矿业）；Placer Dome （普雷斯特）；Anglo American Corp （英美矿业）；INCO
                    Limited 等。我国露天矿山、地下矿山、矿山设计及研究院所、地质勘查单位、矿业大学等领域超过200家单位在使用Surpac软件。
                    2004年9月24日，Surpac软件通过了国土资源部组织的专家评审，标志着Surpac软件符合中国国情，满足中国矿业的技术要求和规范。
                    矿业软件从两维到三维是技术上的飞跃，甚至能够引发管理上的变革。信息化时代，矿业行业用IT技术所带来的价值是大幅提高工作效率。
                    相对于传统技术管理模式，数字化矿山软件能够高效储存和管理“海量”地质、采矿和测量信息，并且显示更为直观，能够使技术人员和管理者更快地做出正确的技术决策和管理决策，真正做到运筹帷幄。
                    我们以国际先进的矿业软件技术及由地质专家、采矿专家组成的强大的技术支持团队为依托，竭诚为大家提供全方位服务，不断地探索矿业的无限可能。
                
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