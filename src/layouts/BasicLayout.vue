<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content> 12121</a-layout-content>
      <a-layout-footer>
        <a-layout-footer class="footer">
          <a href="https://www.codefather.cn" target="_blank"> 图匠 - 面试匠 </a>
        </a-layout-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
  background: white;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
  padding: 20px;
}
</style>
