import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: 'http://61.136.223.57:8080/ThirdSupport.ashx',
  timeout: 5000,
})

// 请求
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  },
)

// 返回
service.interceptors.response.use(
  response => {
    const data = response.data
    return Promise.resolve(data)
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  },
)

// 增
export const postRequest = params => {
  return service({
    method: 'POST',
    data: qs.stringify(params),
  })
}
