import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'
// https://vitejs.dev/config/
const __dirname = path.resolve()
export default defineConfig(()=>{
  return {
    resolve:{
      alias:{//别名配置
        '@':path.resolve(__dirname,'./src')
      }
    },
    css:{
      preprocessorOptions:{
        scss: {
          additionalData: `@use "@/style/variable.scss" as *;` //css全局变量
        },
      }
    },
    plugins: [react(),
      viteMockServe({
        // default
        mockPath: 'mock',
        enable: true,
      }),
    ],
    server:{
      proxy:{
        // 使用 proxy 实例
        '/api': { //key+描述对象，遇到'/api'开头的请求时，都会将其代理到target属性对应的地址
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), //路径重写，将'api换成空串'

        },
      }
    }
  }
})
