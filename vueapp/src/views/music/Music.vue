<template>
  <div class="music">
    <aplayer autoplay listMaxHeight='20' :music="musicList[0]" :list="musicList" v-if="isShow" :showLrc="true">
    </aplayer>
  </div>
</template>
<script>
    import Aplayer from 'vue-aplayer';
    import Axios from 'axios';
    export default{
        data(){
            return{
              musicList:[],
                isShow:false
            }
        },
        created(){
            Axios.get('/data/musicdata.json')
                .then((res)=>{
//                this.musicList = res.data.musicData;
                    var data = res.data.musicData;
                    data.forEach((elem) => {
                        var obj = {};
                        obj.title = elem.title;
                        obj.src = elem.src;
                        obj.artist = elem.author;
                        obj.pic = elem.musicImgSrc;
                        obj.lrc = 'http://localhost:8080/'+elem.lrc;
                        this.musicList.push(obj);
                    });
                    this.isShow = true;

            })
        },
        components: {
            Aplayer
        }
  }
</script>
<style>

</style>