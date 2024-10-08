<template>
  <div class="flex">
    <div
      class="w-1/12 flex flex-col text-xs h-screen justify-center items-center gap-2 border-r border-r-gray-300"
    >
      <button class="flex flex-col justify-center items-center">
        <Icon icon="icon-park-outline:workbench" />
        工作台
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="eos-icons:project-outlined" />项目
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="hugeicons:artificial-intelligence-06" />Al
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="fluent-mdl2:issue-tracking-mirrored" />事项
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="ic:baseline-code" />代码
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="icon-park-outline:ad-product" />
        制品
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="ic:baseline-insights" />
        洞察
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="octicon:book-24" />
        知识
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="mdi:automatic" />
        自动化
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="mdi:user-outline" />
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="ci:more-grid-big" />
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="mdi:bell-outline" />
      </button>
      <button class="flex flex-col justify-center items-center"><Icon icon="uil:setting" /></button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="ph:question-duotone" />
      </button>
      <button class="flex flex-col justify-center items-center">
        <Icon icon="mingcute:user-4-fill" />
      </button>
    </div>
    <div class="w-11/12 relative">
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
      <div class="absolute top-7 right-0">
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
import { Icon } from '@iconify/vue'
let router = useRouter()
let fn1 = () => {
  router.push('/create')
}
</script>
