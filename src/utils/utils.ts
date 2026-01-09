import { authStore } from "../store/auth-store";

export function handleLogout() {
    authStore.clear()
    location.replace('/login')
}