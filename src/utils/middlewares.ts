import { authStore } from "../store/auth-store"
import { type MiddlewareFunction } from "react-router";

export const authMiddleware: MiddlewareFunction = () => {
    const isValid = authStore.isValid()

    if (!isValid) {
        throw window.location.replace('/login')
    }
}


export const publicMiddleware: MiddlewareFunction = () => {
    const isValid = authStore.isValid()

    if (isValid) {
        throw window.location.replace('/')
    }
}
