<template>
  <div :class="$style.f12">Hello App.vue</div>
</template>

<script>
console.log(123)
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped module>
div {
  color: blue;
}
.f12 {
  font-size: 12px;
}
</style>
