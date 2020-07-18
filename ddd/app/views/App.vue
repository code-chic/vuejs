<template>
  <div id="container">
    <img src="../assets/logo.png" width="400" height="400" alt="" />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
