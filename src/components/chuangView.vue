<template>
  <div @click="fn1" class="flex items-center text-xs">
    <Icon icon="majesticons:arrow-left" />
    <div>创建代码仓库</div>
  </div>
  <div class="text-xs">
    <div>所属项目</div>
    <div>
      <input
        type="text"
        v-model="name"
        placeholder="所属项目"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
  </div>
  <div class="flex text-xs">
    <div class="w-24">
      <div>仓库类型</div>
      <div>
        <input
          type="text"
          placeholder="GIT 仓库"
          class="input input-bordered w-24 max-w-xs"
          value="GIT 仓库"
        />
      </div>
    </div>
    <div>
      <div>仓库名称</div>
      <div>
        <input
          type="text"
          v-model="path"
          placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
          class="input input-bordered w-96 max-w-xs"
        />
      </div>
    </div>
  </div>
  <div class="text-xs">
    <div>仓库描述</div>
    <div>
      <textarea
        v-model="description"
        class="textarea textarea-bordered w-4/5"
        placeholder="请输入仓库描述"
      ></textarea>
    </div>
  </div>
  <div class="text-xs">
    <div>初始化仓库</div>
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" />
      <div>生成 README 文件</div>
    </div>
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" />
      <div>添加 .gitignore 文件</div>
    </div>
    <div class="flex items-center">
      <input type="checkbox" class="checkbox checkbox-xs" />
      <div>添加分支模型(仓库创建后将根据所选模型创建分支)</div>
    </div>
  </div>
  <div class="text-xs">
    <div>是否开源</div>
    <div>
      <div class="flex items-center">
        <input type="radio" name="radio-1" class="radio" checked="checked" />
        <div>私有仓库(仅对仓库成员可见，仓库成员可访问仓库。)</div>
      </div>
      <div class="flex items-center">
        <input type="radio" name="radio-1" class="radio" />
        <div>公开仓库</div>
      </div>
    </div>
  </div>
  <div>
    <button class="btn btn-neutral h-8" @click="fn2">完成创建</button>
    <button class="btn h-8" @click="fn1">取消</button>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
let router = useRouter()
let name = ref('')
let description = ref('')
let path = ref('')
let fn1 = () => {
  router.push('/layout')
}
let fn2 = async () => {
  let access_token = await localStorage.getItem('access_token')
  axios
    .post('https://gitee.com/api/v5/user/repos', {
      access_token: access_token,
      name: name.value,
      description: description.value,
      path: path.value,
      private: false
    })
    .then((res) => {
      console.log(res)
    })
}
</script>
