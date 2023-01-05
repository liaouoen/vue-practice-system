<template>
  <div class="header">
    <div class="left-content">
      <el-button size="small">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <h3>首页</h3>
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
export default {
  setup() {
    const getImgSrc = (user) => {
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    };

    return {
      getImgSrc,
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

    h3 {
      color: #fff;
      margin: 0 10px;
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
