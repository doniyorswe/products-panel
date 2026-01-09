import type { AuthPayload } from "../types"

let tokenData: AuthPayload | null = null

export const authStore = {
    set(data: AuthPayload) {
        tokenData = data
        localStorage.setItem("token", JSON.stringify(data))
    },

    get() {
        if (!tokenData) {
            const raw = localStorage.getItem("token")
            tokenData = raw ? JSON.parse(raw) : null
        }
        return tokenData
    },

    isValid() {
        const paredData = JSON.parse(localStorage.getItem("token") ?? 'null')
        return paredData && new Date(paredData.expires_at).getTime() > Date.now()
    },

    clear() {
        tokenData = null
        localStorage.removeItem("token")
    }
}
