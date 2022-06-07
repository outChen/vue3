import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios"
const service: AxiosInstance  = axios.create({
  baseURL: "https://www.fastmock.site/mock/2613404959c2ef31c547d6d697994bca/jason/",
  timeout: 100,
})
const errorHandler = (error: AxiosError) => {
  console.log('errror', error)
  // switch (error.response) {
  //   case 401:
  //     break;
  //   default:
  //     break;
  // }
}
// 添加请求拦截器
service.interceptors.request.use((config:AxiosRequestConfig) => {
  // 在发送请求之前做些什么
  return config
}, (errorHandler))

// 添加响应拦截器
service.interceptors.response.use((response:AxiosResponse) => {
  // 对响应数据做点什么
  return response
}, (errorHandler))


export default service
