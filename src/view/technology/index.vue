<template>
  <div>
    <div class="scroll-box" @click="closeTypeAll">
      <h-header :title="header.title" :isRight="header.isRight" :openTypes="header.openTypes" v-on:openType="openType"></h-header>
      <ul class="kindsBox flexBox closeType" :class="header.openTypes?'active':''">
        <li v-for="(item,index) in typelists" class="closeType">
          <a @click="closeType($event,item.id)" class="closeType" :class="index==0?'active':''">{{item.name}}</a>
        </li>
      </ul>
      <ul class="listBox">
        
      </ul>
    </div>
    <router-view class="section article-detail"></router-view>
  </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui';
  import Service from '@/service/common.js';
  export default {
    data(){
      return {
        header:{
          title:'技术站',
          isRight:true,
          openTypes:false
        },
        typelists:[
          {name:'全部',id:''},
          {name:'Vue',id:1001},
          {name:'Node.js',id:1002},
          {name:'H5',id:1003},
          {name:'Mongodb',id:1004},
          {name:'React',id:1005},
          {name:'小程序',id:1006}     //  总共16个，
        ],
        cur:{
          id:''
        }
      }
    },
    methods:{
      openType(isopen){  // 其实是toggle
        this.header.openTypes=!this.header.openTypes;
      },
      
      closeType(e,id){ // 选择类别
        this.cur.id=id;
        
        this.openType();
      },
      
      closeTypeAll(e){ // 点击非kindsBox部位时关闭
        if(e.target.className.indexOf('closeType')==-1 && this.header.openTypes){
          this.openType();
        }
      },
      
      load(page,a,b,count,fun){ // a,b  大分类-技术站101，小分类-id
        Indicator.open({
          text: 'Loading ...',
          spinnerType: 'triple-bounce'
        });
        let params={
          page:page,level1:a,level2:b,count:count
        };
        Service.getArticles(params).then( (res)=> {
          console.log(res);
          let data=res.res;
        });
      }
    },
    created(){
      this.load(2,'101','',15,()=>{});
    }
  }
</script>

<style lang="scss" scoped src="../../styles/technology/index.scss"></style>