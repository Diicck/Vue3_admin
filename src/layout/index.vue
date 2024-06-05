<template>
  <el-container>

    <el-aside width="210px">

      <el-menu :default-active="activePath" router class="el-menu-vertical-demo" background-color="#545c64"
               text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/banners">
          <i class="el-icon-menu"></i>
          <span slot="title">轮播管理</span>
        </el-menu-item>
        <el-menu-item index="/pays">
          <i class="el-icon-menu"></i>
          <span slot="title">费用支付汇总</span>
        </el-menu-item>

        <el-menu-item index="/sections">
          <i class="el-icon-menu"></i>
          <span slot="title">科室管理</span>
        </el-menu-item>

        <el-menu-item index="/experts">
          <i class="el-icon-menu"></i>
          <span slot="title">专家管理</span>
        </el-menu-item>

        <el-menu-item index="/user">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-container class="is-vertical">
      <el-header>
        头部
      </el-header>
      <el-main>
        <RouterView></RouterView>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {

  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container {
  height: 100vh;
}
</style>
