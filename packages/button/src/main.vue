<template>
  <Button v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </Button>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
  name: "ZButton",
  components: { Button },
};
</script>
<style>
@import "~ant-design-vue/lib/button/style/index.css";
</style>
