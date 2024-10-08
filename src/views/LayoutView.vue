<template>
  <div class="flex">
    <div
      class="w-1/12 flex flex-col text-xs h-screen justify-center items-center gap-3 border-r border-r-gray-300"
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
        <div role="tablist" class="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="最近访问" />
          <div role="tabpanel" class="tab-content p-10">
            <zuiView></zuiView>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            class="tab"
            aria-label="全部仓库"
            checked="checked"
          />
          <div role="tabpanel" class="tab-content p-10"><quanView></quanView></div>

          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="开源仓库" />
          <div role="tabpanel" class="tab-content p-10"><kaiView></kaiView></div>
        </div>
      </div>
      <div class="fixed top-7 right-0">
        <button class="btn btn-active btn-neutral" @click="fn1">创建仓库</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import zuiView from '@/components/zuiView.vue'
import quanView from '@/components/quanView.vue'
import kaiView from '@/components/kaiView.vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let fn1 = () => {
  router.push('/create')
}
</script>
