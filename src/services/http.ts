import axios from "axios"
import { authStore } from "../store/auth-store"

export const baseURL = "https://toko.ox-sys.com/"

const http = axios.create({ baseURL })

http.interceptors.request.use(
    (conf) => {
        const token = authStore.get()?.token

        if (token) {
            conf.headers.Authorization = `Bearer ${token}`
        }
        
        conf.headers.Accept = 'application/json'

        return conf
    },
    (err) => Promise.reject(err)
)

export default http