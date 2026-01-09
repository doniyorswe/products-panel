import { useRef, useState, useCallback } from "react";

export function useDebounce(
    delay: number = 300
) {
    const [value, setValue] = useState<string>("");
    const timeoutRef = useRef<number | null>(null);

    const handleChange = useCallback((newValue: string) => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setValue(newValue);
        }, delay);
    }, [delay]);


    return { value, handleChange };
}
