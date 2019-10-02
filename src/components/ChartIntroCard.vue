<template>
  <b-card :title="title">
    <FAIcon :icon="icon" size="6x" />
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    icon: Array
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    // box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
}
</style>
