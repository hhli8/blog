<template>
    <ul class="bottomFixed flexBox flexBetween" >
        <li v-for="(item,index) in bottomFixed" :key="index"><router-link :to="item.to">{{item.text}}</router-link></li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                bottomFixed:[
                  {text:'首页',to:''},
                  {text:'通讯',to:''},
                  {text:'原创圈',to:''},
                  {text:'个人中心',to:'personal'}
                ]
            }
        },
        props: {
          
        }
    }
</script>

<style lang="scss">
    .bottomFixed{
        position: fixed;
        bottom: 0;
        border-top: .01rem solid #ddd;
        height: 1rem;
        line-height: 1rem;
        width:100%;
        background: #F0F0F0;
        box-sizing: content-box;
        transition: all linear .3s;
        li{
          width:25%;
          text-align: center;
          a{
            display: block;
            color:#333;
            font-size: .26rem;
          }
        }
    }
    .bottomFixed.bot{
      bottom:-1.01rem;
    }
</style>