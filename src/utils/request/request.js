import axios from "axios";

const request = axios.create({
    baseURL:'http://localhost:8800/api/',
    timeout:15000,

})
//添加请求拦截器
request.interceptors.request.use((config)=>{
    return config
})

// 添加相应拦截器
request.interceptors.response.use((res)=>{
    // 成功回调
    return res.data
},(err)=>{
    // 失败回调
    let message = ''
    let status = err?.response?.status
    switch (status) {

        case 400:
            message = '请求错误'
            break
        case 401:
            message = '未授权，请登录'
            break
        case 403:
            message = '拒绝访问'
            break
        case 404:
            message = '请求地址出错'
            break
        case 408:
            message = '请求超时'
            break
        case 500:
            message = '服务器内部错误'
            break
        case 501:
            message = '服务未实现'
            break
        default:   
            message = '连接错误'
            break
    }

    console.log(message)
    return Promise.reject(err) 
})

export default request;