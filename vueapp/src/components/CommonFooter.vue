<template>
    <ul class="footer" :style="{background:bgColor}">
        <li v-for="menu in menuList"  @click="changeBg(menu)">
            <router-link :to="menu.path">{{menu.name}}</router-link>
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        props:['menuList'],
        data(){
            return {
            }
        },
        methods:{
            changeBg(menu){
                // this.bg = menu.bgColor;
                this.$store.dispatch('changeBg',menu)
            }

        },
        computed:mapState(['bgColor'])
    }
</script>
<style lang="scss">
    .footer {
        height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        color: #fff;
        position: fixed;//需要设置宽100%
        bottom: 0;
        line-height: 1rem;
        display: flex;//怪异盒模型
        & li{
            list-style: none;
            /*float: left;*/
            /*width: 1.6rem;*/
            flex-grow: 1;
            text-align: center;
            a{
                color: white;
                outline: none;
                &.router-link-active{
                    color: yellow;
                }
            }
        }
    }
</style>