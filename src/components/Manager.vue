<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header class="user-header">
      <el-row >
        <el-col :span="3">
          <h2 style="color: #f2f2f2">代双亮</h2>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="$route.path"
          router="true"
          class="el-menu-vertical-demo"
          @select="handleSelect">
          <el-menu-item index="/data_home">
            <i class="el-icon-picture"></i>
            <span slot="title">我的数据</span>
          </el-menu-item>
          <el-menu-item index="/task">
            <i class="el-icon-menu"></i>
            <span slot="title">任务列表</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-document"></i>
            <span slot="title">我的信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main-content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
      name: "Manager",
      data () {
        return{
          is_add:true,
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        onSelectImage(dts){
          console.log(dts)
        }

      },

    }
</script>

<style lang="scss">
.user-header{
  height: 80px;
  width: 100%;
  background-color: #42b983;
}
  .main-content{
    background-color: #DCDFE6;
    padding: 0px;
  }

.image {
  width: 40px;
  height: 40px;
  padding: 4px;
  display: block;
}
  .text-style{
    color: aliceblue;
  }





</style>
