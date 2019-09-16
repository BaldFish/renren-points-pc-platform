<template>
  <div class="home">
    <ul>
      <li class="logo_wrap">
        <img src="../images/logo.png" alt="">
        <span>人人积分</span>
      </li>
      <li v-for="(item,index) in list" :class="{active : index===id}" @click="tab(index)">{{item}}</li>
    </ul>
    <div class="scroll_content">
      <div class="head">
        <h2>汽车生活中的Libra </h2>
        <h3>基于积分 3.0 重新定义全球10亿车主的生态体验</h3>
        <a class="download" href="javascript:void(0);" @click.prevent="downLoadFile()">下载白皮书</a>
      </div>
      <div id="jump0" class="content">
        <h4>项目简介</h4>
        <p>利用区块链技术特性，以通证化积分为抓手，整合汽车产业相关方形成基于积分通兑的战略联盟，以安全可控的方式实现企业间用户促活和导流，真正解决企业痛点的同时，打造产业共识和大规模协同体系，构建全新的汽车生活商业新生态。</p>
      </div>
      <div id="jump1" class="content">
        <h4>商业价值</h4>
        <img src="../images/shangyejiazhi.png" alt="">
      </div>
      <div id="jump2" class="content">
        <h4>积分流转</h4>
        <img src="../images/jifenliuzhuan.png" alt="">
      </div>
      <div id="jump3" class="content">
        <h4>积分联盟</h4>
        <img src="../images/jifenlianmeng.png" alt="">
      </div>
      <div id="jump4" class="content">
        <h4>资讯中心</h4>
        <div class="information">
          <img src="../images/zixunzhongxin.png" alt="">
          <div class="right">
            <p>央行数字货币已开始“闭环测试”</p>
            <p>2019/9/6</p>
          </div>
        </div>
      </div>
      <div id="jump5" class="content">
        <h4>联系我们</h4>
        <p>商务负责人：张经理 电话：18001226131</p>
        <p>邮箱：zhangqing@cnlaunch.com</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {
        id: 0,
        list: ["项目简介", "商业价值", "积分流转", "积分联盟", "资讯中心", "联系我们"]
      }
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      tab(index) {
        this.id = index;
        document.querySelector(`#jump${index}`).scrollIntoView(true);
      },
      //下载帮助手册
      downLoadFile() {
        this.fileLinkToStreamDownload("https://launchain.oss-cn-zhangjiakou.aliyuncs.com/docs/rrpoints-saas/manual.pdf", "白皮书", "pdf")
      },
      fileLinkToStreamDownload(url, fileName, type) {
        let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
        if (!reg.test(url)) {
          throw new Error("传入参数不合法, 不是标准的文件链接");
        } else {
          let that = this
          let xhr = new XMLHttpRequest();
          xhr.open('get', url, true);
          xhr.setRequestHeader('Content-Type', `application/${type}`);
          xhr.setRequestHeader('Access-Control-Allow-Origin', `*`);
          xhr.responseType = "blob";
          xhr.onload = function () {
            if (this.status == 200) {
              // 接受二进制文件流
              let blob = this.response;
              that.downloadExportFile(blob, fileName, type)
            }
          }
          xhr.send();
        }
      },
      downloadExportFile(blob, tagFileName, fileType) {
        let downloadElement = document.createElement('a');
        let href = blob;
        if (typeof blob == 'string') {
          downloadElement.target = '_blank';
        } else {
          href = window.URL.createObjectURL(blob); // 创建下载的链接
        }
        downloadElement.href = href;
        downloadElement.download = tagFileName + '.' + fileType; // 下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); // 点击下载
        document.body.removeChild(downloadElement); // 下载完成移除元素
        if (typeof blob != 'string') {
          window.URL.revokeObjectURL(href); // 释放掉 blob 对象
        }
      },
    },
  }
</script>

<style scoped lang="stylus">
  .home {
    width 1440px
    position relative
    
    ul {
      display flex
      align-items center
      margin-top 10px
      position absolute
      
      li {
        margin-right 60px
        list-style none
        font-size: 16px;
        color: #7a7a87;
        cursor pointer
      }
      
      .active {
        color: #ffffff;
      }
      
      .logo_wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        
        span {
          margin-top 8px
        }
      }
    }
    
    .scroll_content {
      margin-top 75px
      color #ffffff
      
      .head {
        width 971px
        height 293px
        margin 0 auto
        background: url("../images/img.png") no-repeat right
        font-size 0
        
        h2 {
          font-size: 50px;
          padding-top 34px
        }
        
        h3 {
          font-size 30px
          margin-top 20px
        }
        
        .download {
          margin-top 74px
          display inline-block
          color #ffffff
          font-size: 20px;
          padding 15px 50px
          border: solid 1px #ffffff;
        }
      }
      
      .content {
        text-align center
        h4 {
          font-size: 36px;
          margin-top 80px
          margin-bottom 70px
          text-align center
        }
        
        p {
          width: 878px;
          font-size: 20px;
          line-height: 32px;
          text-align center
          margin 0 auto
        }
      }
      
      .content:nth-child(6) {
        .information {
          display flex
          align-items center
          padding-left 160px
          
          .right {
            margin-left 54px
            
            p {
              font-size 30
              text-align left
              line-height: 50px;
            }
            p:last-child{
              font-size 16px
            }
          }
        }
      }
      
      .content:nth-child(7) {
        margin-bottom 100px
        
        p {
          font-size: 18px;
        }
      }
    }
  }
</style>