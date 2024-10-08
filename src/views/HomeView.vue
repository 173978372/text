<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
// let route = useRoute()
let router = useRouter()
let username = ref('')
let password = ref('')

let fn = () => {
  console.log(username.value, password.value)
  axios
    .post(
      'https://gitee.com/oauth/token',
      {
        grant_type: 'password',
        username: username.value,
        password: password.value,
        client_id: '154d4c750515aa31b8863f45108722dea107cb514be7650c4400e5726a2cfccd',
        client_secret: '81da09a5e20e38dcad06be999cf9bb505fa9bcbb17c791d61872610142ab5f02',
        scope: 'user_info projects pull_requests issues notes keys hook groups gists enterprises'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then((res) => {
      console.log(res.data.access_token)
      localStorage.setItem('access_token', res.data.access_token)
      router.push('/layout')
    })
}
</script>

<template>
  <div class="flex h-screen">
    <div class="w-1/2">
      <img src="/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" class="h-full w-full" alt="" />
    </div>
    <div class="w-1/2 bg-white flex flex-col gap-4 justify-center items-center">
      <div>
        <div>登录，即刻创造您的应用</div>
      </div>
      <div>
        <input
          type="text"
          v-model="username"
          placeholder="邮箱"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <input
          type="text"
          v-model="password"
          placeholder="密码"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="flex">
        <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
        <p class="text-xs">我已阅读并同意 服务协议 和 隐私政策</p>
      </div>
      <div class="w-full flex items-center justify-center">
        <button @click="fn" class="btn w-96">登录</button>
      </div>
      <div>
        <div class="text-xs">还未注册? 立即注册</div>
      </div>
    </div>
  </div>
</template>
