<template>
  <el-menu
    class="el-menu-vertical-demo el-menu"
    background-color="#545c64"
    text-color="#fff"
    :collapse="!$store.state.isCollapse"
    :collapse-transition="false"
    :router="true"
  >
    <h3 v-show="$store.state.isCollapse">后台管理</h3>
    <h3 v-show="!$store.state.isCollapse">后台</h3>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren()"
      :key="item.label"
      :class="$route.name === item.name ? 'is-active' : ''"
      @click="clickMenu(item)"
    >
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu
      :index="item.path"
      v-for="item in hasChildren()"
      :key="item.label"
      :router="true"
    >
      <template #title>
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item
        :index="subItem.path"
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
        :class="$route.name === subItem.name ? 'is-active' : ''"
        @click="clickMenu(subItem)"
      >
        <component class="icons" :is="subItem.icon"></component>
        <span>{{ subItem.label }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const dataList = store.state.dataList;

    const noChildren = () => {
      return dataList.filter((item) => !item.children);
    };

    const hasChildren = () => {
      return dataList.filter((item) => item.children);
    };

    const clickMenu = (item) => {
      // 跳转路由
      router.push({
        name: item.name,
      });
      // 管理vuex的selectMenu事件
      store.commit("selectMenu", item);
    };

    console.log(route.name);

    return {
      noChildren,
      hasChildren,
      clickMenu,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 20px;
  height: 20px;
  margin-right: 3px;
}

.el-menu {
  height: 100%;
  border-right: none;

  h3 {
    font-size: 15px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }

  :deep(.el-sub-menu__title) {
    padding-right: 0;
  }
}
</style>
