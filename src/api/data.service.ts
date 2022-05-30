import service from "@/service/http";
interface DATA<T> {
  code: number, // 请求code值
  data: any, // 请求的data
  msg: string, // 请求返回的提示文字
  [propName: string]: any
}
interface Params {
  [propName: string]:any
}
export function login<U>(params:Params): Promise<DATA<U>>{
  return service.get('api', {params}) ; 
}