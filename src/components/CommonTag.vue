<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="selectTag(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script>
import { isTemplateNode } from "@vue/compiler-core";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const tags = store.state.tagList;
    const selectTag = (item) => {
      router.push({ name: item.name });
      // 管理vuex的selectMenu事件
      store.commit("selectMenu", item);
    };

    const handleClose = (tag, index) => {
      let tagIndex = tags.length - 1;
      store.commit("closeTag", tag);
      // 判断： 如果要删的tag和当前页面不一样，直接删掉，页面不用处理
      if (tag.name !== route.name) {
        return;
      }
      // 判断： 如果要删的tag和当前页面一样，且是最后一个tag，跳转至前一个tag页
      if (index === tagIndex) {
        router.push({
          name: tags[index - 1].name,
        });
        // 如果要删的tag和当前页面一样，且不是最后一个tag
      } else {
        router.push({
          name: tags[index].name,
        });
      }
    };

    return {
      tags,
      selectTag,
      handleClose,
    };
  },
};
</script>

<style lang="less" scoped>
.tags {
  padding: 20px;
  width: 100%;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
