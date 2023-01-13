<template>
  <div class="header">
    <div class="left-content">
      <el-button size="small" plain @click="handleCollapse" class="btn">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }" @click="handleHome"
          >首页</el-breadcrumb-item
        >
        <el-breadcrumb-item v-if="current && current.path.slice(1, 6) === 'other'">
          其他</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: current.path }" v-if="current">
          {{ current.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userImg" :src="getImgSrc('user-default')" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const getImgSrc = (user) => {
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    };

    const handleCollapse = () => {
      //调用vuex中的mutations
      store.commit("updateIsCollapse");
    };

    // 面包屑选择首页
    const handleHome = () => {
      store.commit("selectHome");
    };
    const current = computed(() => {
      return store.state.currentMenu;
    });
    // const current = store.state.currentMenu;

    console.log("current", current);

    return {
      getImgSrc,
      handleCollapse,
      handleHome,
      current,
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;

  .left-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
      margin-right: 10px;
    }

    .bread :deep(span) {
      color: #fff;
    }
  }

  .right-content {
    .userImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
