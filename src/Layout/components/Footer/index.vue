<template>
  <div class="botWrapper">圣德医院-软件开发科</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["permission_routes", "sidebar"])
  }
};
</script>
<style lang="scss" scoped>
.botWrapper {
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 30px;
  background: #99a9bf;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
}
</style>