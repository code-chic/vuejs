<template>
  <div class="card" :style="{height: height}">
    <div class="title" v-if="showTitle">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

// 检查是否存在 title 插槽
function isTitleSlot (vm: Vue): boolean {
  return !!vm.$slots.title
}

@Component
export default class Card extends Vue {
  @Prop({ default: '123px' }) height: string | undefined

  showTitle = false

  public created () {
    this.showTitle = isTitleSlot(this)
  }
}
</script>
