<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :isCollapse="!$store.state.isCollapse"
  >
    <el-menu-item :index="item.label" v-for="item in noChildren()" :key="item.label">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.label">
      <template #title>
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item
        :index="subItem.label"
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
      >
        <component class="icons" :is="subItem.icon"></component>
        <span>{{ subItem.label }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  setup() {
    const dataList = [
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
      {
        path: "/other",
        name: "other",
        label: "其他",
        icon: "location",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
            url: "Other/PageOne",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
            url: "Other/PageTwo",
          },
        ],
      },
    ];

    const noChildren = () => {
      return dataList.filter((item) => !item.children);
    };

    const hasChildren = () => {
      return dataList.filter((item) => item.children);
    };

    console.log(noChildren());
    return {
      noChildren,
      hasChildren,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
}

.el-menu {
  height: 100%;
  border-right: none;
}
</style>
