<template>
<b-container fluid class="page pl-0 pr-0">
    <b-row>
        <b-col  class='pl-0 pr-0'>
            <b-container fluid class="headline pl-0 pr-0">
                <b-row class='pl-0 pr-0'>&nbsp;</b-row>
                <b-row>
                    <b-col>
                        <h1 class = "text-center">Image Gallery</h1>
                    </b-col>
                </b-row>
                <b-row>&nbsp;</b-row>
            </b-container>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <b-container fluid>
                <!--<div scrollY="fetchPhotos">
                    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item"
                    gutter="5" fit-width="true" class="masonry-container">
                        <div> <img :src=image.url
                        v-masonry-tile
                        class="item"
                        v-for="(image, index) in images" :key="index"
                        alt="Images display" />
                        </div>
                    </div>
                </div>-->
                <b-container fluid class="imagelist" v-for="(image,index) of images" :key="index">
                    <b-row>
                        <b-col>
                            <b-container fluid class="image-card">
                                <b-row>
                                    <b-col sm="4">
                                        <img class="images-card_image" :src="image.url">
                                    </b-col>
                                </b-row>
                            <!--{{image.url}}-->
                            </b-container>
                        </b-col>
                    </b-row>
                </b-container>
                               <!-- Replace the default loading animation with slot -->
                <scroll-loader :loader-method="fetchPhotos" :loader-disable="disable">
                <div>Loading...</div>
                </scroll-loader>
                <!--    <div class="listimages" v-for="(image,index) in images" :key="index">
                        {{image}}
                    </div>-->
                
            </b-container>
        </b-col>
    </b-row> 
</b-container>

   <!-- <ul>
       <li v-for="image in images" :key=image>
            {{image}}
        </li>
    </ul>-->

</template>
<script>
import axios from 'axios'
export default {
    name: "home",
    //Requests: [requests],
    data(){
        return{
            loadMore:true,
            images: [],
            page:1,
            containerId: null,
            pageSize:1,
            disable:false
        };
    },
    //mounted: function (){
    //    this.fetchPhotos();
    //    console.log(window.scrollY);
        //this.scroll(this.person);
    //},
    methods: {
    //scroll(){
    //  window.onscroll = () => {
    // let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight 
    //  === document.documentElement.offsetHeight;
    //
    //  if(bottomOfWindow){
    //      fetchPhotos();
    //  }
    //  }
    //},
    fetchPhotos: function () {
      const baseURL = 'https://jsonplaceholder.typicode.com/photos/'
      axios.get(baseURL, {
            params: {
              page: this.page++,
              //pageSize: this.pageSize,
            }
          })
      .then((result) => {
        // this.photos = result.data
        //this.images.push(result.data);
        result.data && (this.images = [...this.images, ...result.data])
        //result.data.length < this.pageSize && (this.loadMore = false)
      })
      .catch(error => {
            console.log(error);
          })
      }
    },
    watch: {
      page (value) {
        this.disable = value > 10
      }
    }
};
</script>
<style lang="scss">
</style>