<template>
  <div id="home">
    <h3>这里是首页</h3>
    <hr />
    <button type="button" @click="getTestDataHandle">test mock xhr</button>
    <button type="button" @click="addTestDataHandle">test normalize xhr</button>
  </div>
</template>

<script>
import { getTestData, addTestData } from '@/api/test.api'
export default {
  name: 'Home',
  methods: {
    async getTestDataHandle () {
      try {
        const result = await getTestData({ queryId: 1 })
        console.log('result: ', result)
      } catch (error) {
        console.error(error)
      }
    },
    async addTestDataHandle () {
      try {
        const result = await addTestData({ username: 'admin', name: '张大炮' })
        console.log('result: ', result)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
