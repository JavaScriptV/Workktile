<template>
  <div id="app">
    <div class="zuologo">
      <div class="app-nav">
        <div class="logo">
            <a href="#">
              <img align="center" width="40" src="https://s3.cn-north-1.amazonaws.com.cn/lclogo/team_logo_default.png" alt="ww" title="ww">
            </a>
        </div>
        <div class="daoh">
          <ul>
            <li><router-link class ='name' :to ='tabNav[0].url'>
                <span class="ti">
                  <i class="wtf iconfont  icon-icon--"></i>
                </span>
                <span class="name">消息</span>
              </router-link></li>
            <li><router-link class ='name' :to ='tabNav[1].url'>
                <span class="ti">
                  <i class="wtf iconfont  icon-iconset0338"></i>
                </span>
                <span class="name">项目</span>
              </router-link></li>
            <li><router-link class ='name' :to ='tabNav[2].url'>
                <span class="ti">
                  <i class="wtf iconfont  icon-rili"></i>
                </span>
                <span class="name">日历</span>
              </router-link></li>
            <li><router-link class ='name' :to ='tabNav[3].url'>
                <span class="ti">
                  <i class="wtf iconfont  icon-iconset0196"></i>
                </span>
                <span class="name">网盘</span>
              </router-link></li>
          </ul>
        </div>
        <div class="bottom-nav">
           <ul>
              <li><router-link class ='name' :to ='tabNav[4].url'>
                  <span class="ti">
                      <i class="iconfont  icon-tongxunlu"></i> 
                  </span>
                 <span class="name">通讯录</span> 
                </router-link></li>
            </ul>
            <a href="javascript:;"><div>M</div></a>
        </div>
      </div>
    </div>
    <!-- 用于展示路由链接的组件 -->
    <router-view class="yopu"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tabNav:[
          {
            title:'消息',
            url:'/xiaoxi/'
          },
          {
            title:'项目',
            url:'/xiangmu/'
          },
          {
            title:'日历',
            url:'/rili/'
          },
          {
            title:'网盘',
            url:'/wangpan/'
          },
          {
            title:'通讯录',
            url:'/tongxunlu/'
          }
        ]
    }
  }
}
</script>

<style lang="scss">
a{
  text-decoration: none;
}
#app {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
  overflow-y: hidden;
  box-sizing: border-box;
}
.zuologo{
  width: 70px;
  height: 100%;
  background: #22d7bb;
  position: absolute;
  left: 0;
  top: 0;
}
.app-nav{
  flex-shrink: 0;
  position: relative;
  width: 70px;
  height: 100%;
  background: #22d7bb;
  overflow-y: hidden;
  .logo{
      a{
        margin: 18px 0;
        text-align: center;
        display: block;
        color: #22d7bb;
        &:hover{
          opacity: .7;
        }
        img{
          width: 50px;
          height: 50px;
          border-radius: 12px;
        }
      }
    }
}
.daoh{
      text-align: center;
      ul{
        margin: 0;
        padding: 0;
        li{
          list-style-type: none;
          cursor : pointer;
          position: relative;
          a{
            color: #22d7bb;
            display: block;
            text-decoration: none;
            height: 70px;
            -webkit-transition: -webkit-box-shadow .3s;
            transition: -webkit-box-shadow .3s;
            transition: box-shadow .3s;
            transition: box-shadow .3s,-webkit-box-shadow .3s;
          a.app-item {
                background: #18bfa4;
            }
          &:hover{
          background: #18bfa4;
          text-decoration: none;
          box-shadow: 0 0 2px 2px #18bfa4;
        }    
            .ti{
                margin-top: 15px;
                display: inline-block;
                color: #fff;
                font-size: 24px;
                opacity: .8;
                -webkit-transition: opacity .5s,-webkit-transform .5s;
                transition: opacity .5s,-webkit-transform .5s;
                transition: transform .5s,opacity .5s;
                transition: transform .5s,opacity .5s,-webkit-transform .5s; 
                i{
                  font-size: 30px;
                }
            }
            &:hover .ti{
                opacity: 1;
                -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
            }
            .name{
                display: block;
                height: 0;
                overflow: hidden;
                font-size: 12px;
                color: #fff;
                -webkit-transform: translateY(0);
                transform: translateY(0);
                -webkit-transition: height .5s,-webkit-transform .5s;
                transition: height .5s,-webkit-transform .5s;
                transition: height .5s,transform .5s;
                transition: height .5s,transform .5s,-webkit-transform .5s;
            }
            &:hover .name{
              height: auto;
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
            }
          }
        }
      }
}
.bottom-nav{
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  ul {
    margin-bottom: 10px;
     li {
    cursor: pointer;
    position: relative;
    list-style: none;
      a{
        display: block;
        text-decoration: none;
        height: 70px;
        -webkit-transition: -webkit-box-shadow .3s;
        transition: -webkit-box-shadow .3s;
        transition: box-shadow .3s;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
        background-color: transparent;
        &:hover{
          background: #18bfa4;
          text-decoration: none;
          box-shadow: 0 0 2px 2px #18bfa4;
        }
        .ti{
          margin-top: 15px;
          display: inline-block;
          color: #fff;
          font-size: 24px;
          opacity: .8;
          -webkit-transition: opacity .5s,-webkit-transform .5s;
          transition: opacity .5s,-webkit-transform .5s;
          transition: transform .5s,opacity .5s;
          transition: transform .5s,opacity .5s,-webkit-transform .5s;
          i{
            font-size: 24px;
          }
        }
        &:hover .ti{
            opacity: 1;
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        .name{
            display: block;
            height: 0;
            overflow: hidden;
            font-size: 12px;
            color: #fff;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-transition: height .5s,-webkit-transform .5s;
            transition: height .5s,-webkit-transform .5s;
            transition: height .5s,transform .5s;
            transition: height .5s,transform .5s,-webkit-transform .5s;
        }
        &:hover .name{
              height: auto;
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
        }
      }
    }
  }
  a{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    display: block;
    color: white;
    div{
      text-align: center;
      overflow: hidden;
      zoom: 1;
      color: #fff;
      text-shadow: transparent 0 0 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      line-height: 48px;
      font-size: 12px;
      background-color: rgb(45, 188, 255);
      margin: 0 auto;
    }
  }
  .router-link-active{
    background: #18bfa4;
}
}

.yopu{
  margin-left: 70px;
  height: 100%;
  width: calc(100% - 70px);
  color: white;
}
.router-link-active{
    background: #18bfa4;
}
</style>
