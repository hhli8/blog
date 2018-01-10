<template>
  <div>
    <div class="scroll-box" @scroll="scroll" > 
      <div class="advertise">
        <mt-swipe :auto="0" :show-indicators="true">
          <mt-swipe-item v-for="(item,index) in advertise" :key="index"><a href="#"><img alt="loading" :src="item.src"/></a></mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="nav-fixed flexBox flexBetween" ref="scroll" :class="navParam.fixed">
        <li v-for="(item,index) in navFixed" :key="index"><router-link :to="item.to">{{item.text}}</router-link></li>
      </ul>
      <ul class="nav-fixed" v-show="navParam.navLike" ref="scrollLike"></ul>
      <h-footer :class="footerShow?'':'bot'"></h-footer>
      <p ref="content">
        0_
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
        asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>asdadasdasda<br/>
      </p>
      5555
    </div>
    <router-view class="section"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        // 广告图片
        advertise:[
          {src:'static/imgs/index/advertise/t0123b744d4521f374e.jpg',href:''},
          {src:'static/imgs/index/advertise/t01492724180de8cd95.jpg',href:''},
          {src:'static/imgs/index/advertise/t017d1ad2008dbcfb91.jpg',href:''},
          {src:'static/imgs/index/advertise/t017f3284e2b5367877.jpg',href:''},
          {src:'static/imgs/index/advertise/t01b364093013dad82a.jpg',href:''}
        ],
        
        // nav 内容// 健身 美食  旅游  技术 杂谈 
        navFixed:[
          {text:'技术站',to:'/technology'},
          {text:'生活味',to:'/life'},
          {text:'小厨房',to:'/delicious'},
          {text:'锻炼吧',to:'/sport'}
        ],
        // nav 置顶参数
        navParam:{
          navLike:false,
          fixed:''
        },
        // 判断上下滑动
        conScroll:{
          startY:0,
          currentY:0
        },
        
        footerShow:true
         
      }
    },
    methods:{
      scroll(){
        let top=this.$refs.scroll.getBoundingClientRect().top; 
        let topLike=this.$refs.scrollLike.getBoundingClientRect().top; 
        if(top<=0){
          this.navParam.navLike= true;
          this.navParam.fixed= 'fixed';
        }
        if(topLike>0){
          this.navParam.navLike= false;
          this.navParam.fixed= '';
        }
      },
      
      init(){
        this.$refs.content.addEventListener('touchstart', this.handleTouchStart);
        this.$refs.content.addEventListener('touchmove', this.handleTouchMove);
      },
      
      handleTouchStart(){
        this.startY = event.touches[0].clientY; 
      },
      handleTouchMove(){
        this.currentY = event.touches[0].clientY;
        this.footerShow= this.currentY>this.startY? true : false;
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<style lang="scss" scoped src="../styles/index.scss"></style>