<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
import CommonTag from "../components/CommonTag.vue";
export default defineComponent({
  components: {
    CommonHeader,
    CommonAside,
    CommonTag,
  },
});
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100%;

  & > .el-container {
    height: 100%;
  }
}

.el-header {
  padding: 0;
}
</style>
