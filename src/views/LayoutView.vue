<template>
  <div class="flex">
    <div
      class="w-1/12 flex flex-col text-xs h-full justify-center items-center gap-2 border-r border-r-gray-300"
    >
      <button>工作台</button>
      <button>项目</button>
      <button>Al</button>
      <button>事项</button>
      <button>代码</button>
      <button>制品</button>
      <button>洞察</button>
      <button>知识</button>
      <button>自动化</button>
      <button>1</button>
      <button>更多</button>
      <button>消息</button>
      <button>设置</button>
      <button>问题</button>
      <button>用户</button>
    </div>
    <div class="w-11/12">
      <div class="border-b border-b-gray-300">代码仓库</div>
      <div class="flex justify-between text-xs">
        <div class="flex gap-4">
          <button @click="fn1">最近访问</button>
          <button @click="fn2">全部仓库</button>
          <button @click="fn3">开原仓库</button>
        </div>
        <div><button @click="fn4">创建代码仓库</button></div>
      </div>
      <component :is="com"></component>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import zuiView from '@/components/zuiView.vue'
import quanView from '@/components/quanView.vue'
import kaiView from '@/components/kaiView.vue'
import chuangView from '@/components/chuangView.vue'
let com = ref(zuiView)
let fn1 = () => {
  com.value = zuiView
}
let fn2 = () => {
  com.value = quanView
}
let fn3 = () => {
  com.value = kaiView
}
let fn4 = () => {
  com.value = chuangView
}
</script>
