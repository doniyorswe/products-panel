import { Pagination, Table } from "antd";
import type { ListResp, Product } from "../types";
import { useEffect, useState } from "react";
import http from "../services/http";
import { useProductCols } from "./use-cols";

export default function ProductsPage() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [data, setData] = useState<ListResp<Product>>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const resp = await http.get('variations', { params: { page, size }, signal: controller.signal });
                setData(resp.data);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        return () => controller.abort();
    }, [page, size]);

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg">Products</h3>
            <Table
                loading={isLoading}
                dataSource={data?.items}
                columns={useProductCols()}
                rowKey="id"
                pagination={false}
            />
            {data && <Pagination
                onChange={(page) => {
                    setPage(page)
                }}
                onShowSizeChange={(_, pageSize) => {
                    setSize(pageSize)
                }}
                total={data?.total_count}
            />}
        </div>
    )
}
