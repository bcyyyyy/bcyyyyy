<template>
  <div class="movie">
    <router-view></router-view>
  </div>
</template>
<!--<script>-->
    <!--import Axios from 'axios';-->
    <!--import movieList from '@/views/movie/movieList.vue';-->
    <!--export default{-->
        <!--data(){-->
            <!--return {-->
                <!--movieList:[],-->
                <!--isShow:false,-->
                <!--isEnd:false-->
            <!--}-->
        <!--},-->
        <!--created(){-->
            <!--//https://www.cnblogs.com/trackingmore/p/7156877.html-->
            <!--//https://developers.douban.com/wiki/?title=movie_v2-->
            <!--this.getData();-->
<!--//          Axios.get('/movie.json')-->
<!--//              .then((res)=>{-->
<!--//                  this.movieList = res.data.subjects;-->
<!--//                  console.log(this.movieList);-->
<!--//              });-->

            <!--// window.onscroll = ()=>{-->
            <!--//     var scrollTop = document.documentElement.scrollTop;-->
            <!--//     var scrollHight = document.documentElement.scrollHeight;-->
            <!--//     var clientHeight = document.documentElement.clientHight;-->
            <!--//     if(scrollTop + clientHight == scrollHight && !this.isEnd){-->
            <!--//     this.isShow = true;-->
            <!--// }-->

        <!--// },-->
            <!--window.onscroll= ()=> {-->
                <!--var scrollTop = document.documentElement.scrollTop;-->
                <!--var scrollHeight = document.documentElement.scrollHeight;-->
                <!--var clientHeight = document.documentElement.clientHeight;-->
                <!--if(scrollTop + clientHeight == scrollHeight && !this.isEnd){-->
                    <!--this.isShow = true;-->
                    <!--this.getData();-->
                    <!--// console.log(11111)-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods:{-->
            <!--getDetail(movie){-->

                <!--this.$router.push('/movie-detail/'+movie.id);-->


            <!--},-->
            <!--getData(){-->
<!--//              Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')-->
<!--//                  .then((res)=>{-->
<!--//                      this.movieList = [...this.movieList,...res.data.subjects];-->
<!--//                      this.isShow = false;-->
<!--//                      if(res.data.subjects.length < 5){-->
<!--//                          this.isEnd = true;-->
<!--//                      }-->
<!--//                  });-->

                <!--Axios.get('/movie.json')-->
                    <!--.then((res)=>{-->
                        <!--var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5);-->
                        <!--this.movieList = [...this.movieList,...arr];-->
                        <!--this.isShow = false;-->
                        <!--if(arr.length < 5){-->
                            <!--// this.isShow= false;-->
                            <!--this.isEnd = true;-->
                        <!--}-->
                    <!--});-->



            <!--}-->
        <!--},-->
        <!--components:{-->
            <!--movieList-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="scss">-->
  <!--.loading{-->
    <!--text-align: center;-->
  <!--}-->

<!--</style>-->
