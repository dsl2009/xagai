<template>
  <el-container>
    <el-header style="background-color: ghostwhite">
      <el-row type="flex" justify="end">
          <el-button :disabled="is_add" type="primary" style="margin-top: 10px">添加到任务</el-button>
          <el-button type="primary" icon="el-icon-upload" style="margin-top: 10px">上传数据集</el-button>
      </el-row>
    </el-header>
    <el-main>
      <vue-select-image :dataImages="dataImages"
                        :useLabel="true"
                        :w="'80px'"
                        :h="'80px'"
                        :isMultiple="true"
                        @onselectimage="onSelectImage">
      </vue-select-image>
    </el-main>
  </el-container>
</template>

<script>
  import VueSelectImage from 'vue-select-image'
  require('vue-select-image/dist/vue-select-image.css')
  import Vue from 'vue'
  Vue.use(VueSelectImage)
    export default {
      name: "DataHome",
      data () {
        return{
          dataImages:[{
            id: '1',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 1'
          }, {
            id: '2',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '3',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '4',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '5',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '6',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '7',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }, {
            id: '8',
            src: 'https://unsplash.it/200?random',
            alt: 'Alt Image 2'
          }
          ]
        }
      },
      comments:{
        VueSelectImage
      }
    }
</script>

<style scoped>

</style>
