import service from "@/service/http"
export const login = (params: any) => service.get(params)