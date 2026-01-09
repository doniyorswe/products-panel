import { Input, Table } from "antd";
import { products } from "../utils/fake-data";
import { useProductCols } from "./use-cols";
import type { Product } from "../types";
import { useMemo } from "react";
import { useDebounce } from "../hooks/use-debounce";

export default function SearchPage() {
    const { value: search, handleChange } = useDebounce(400);

    const items = useMemo(() => {
        const v = searchItems(search)
        return v
    }, [search])

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
                <h3 className="text-lg">Search page</h3>
                <Input
                    className="max-w-sm"
                    placeholder="Search.."
                    onChange={v => handleChange(v.target.value)}
                />
            </div>
            <Table
                dataSource={items}
                columns={useProductCols()}
                rowKey="id"
                pagination={false}
            />
        </div>
    )
}


// ====== MAIN SEARCH LOGIC ====== 

const searchItems = (query: string): Product[] => {
    if (!query) return products;

    const result: Product[] = [];

    for (const p of products) {
        if (includes(p.productName, query)) {
            result.push(p);
        }
    }

    return result;
};

const includes = (text: string, query: string) => {
    const context = text.toLowerCase();
    const q = query.toLowerCase();

    let found = false;

    for (let i = 0; i <= context.length - q.length; i++) {
        let match = true;
        for (let j = 0; j < q.length; j++) {
            if (context[i + j] !== q[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            found = true;
            break;
        }
    }

    return found
}