import { useState } from "react"
import http from "../http"
import type { AxiosRequestConfig } from "axios"

type MutateOptions = {
    onSuccess?: (data?: any) => void
    onError?: (error?: any) => void
}

type HookParams = {
    mutateOptions: MutateOptions
    config: AxiosRequestConfig
}

export default function usePost(params?: Partial<HookParams>) {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<any>(null)

    async function mutate<T extends object>(
        url: string,
        data: T,
        options?: MutateOptions,
        config?: AxiosRequestConfig<T>
    ) {
        try {
            setIsPending(true)
            const resp = await http.post<T>(url, data, params?.config ?? config)
            options?.onSuccess?.(resp.data)
            params?.mutateOptions?.onSuccess?.(resp.data)

        } catch (err: any) {

            const error = err?.response?.data
            setError(error)
            options?.onError?.(error)
            params?.mutateOptions?.onError?.(error)

        } finally {
            setIsPending(false)
        }

    }
    return { mutate, isPending, error }
}
