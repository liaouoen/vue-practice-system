<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user-default.png" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="log-info">
          <p>上次登陆时间：<span>2022-1-11</span></p>
          <p>上次登陆地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="" />
    </el-col>
  </el-row>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from "vue";

export default {
  setup() {
    const tableLabel = {
      name: "课程",
      todayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    };
    const tableData = ref([]);

    const { proxy } = getCurrentInstance();
    const getTableList = async () => {
      // await axios
      //   .get(
      //     "https://www.fastmock.site/mock/3735c124dc55b3961c35241e90e1b1c5/api/home/getData"
      //   )
      //   .then((res) => {
      //     // console.log("res.data.data.tableData", res.data.data.tableData);
      //     if (res.data.code === 200) {
      //       tableData.value = res.data.data.tableData;
      //     }
      //   });
      let res = await proxy.$api.getTableData();
      tableData.value = res.tableData;
    };
    onMounted(() => {
      getTableList();
    });
    return {
      tableLabel,
      tableData,
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
      width: 100px;
    }

    .userinfo {
      margin-left: 25px;
      line-height: 30px;

      .name {
        font-size: 20px;
      }

      .role {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .log-info {
    margin-top: 10px;
    line-height: 30px;
    font-size: 14px;
    color: #999;

    span {
      color: #111;
    }
  }
}
</style>
