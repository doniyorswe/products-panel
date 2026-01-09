import { Pagination, Table, type TableColumnsType } from "antd";
import type { ListResp, Product } from "../types";
import { useEffect, useState } from "react";
import http from "../services/http";

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

    const columns: TableColumnsType<Product> = [
        {
            title: 'Product',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku',
        },
        {
            title: 'Barcode',
            dataIndex: 'barcode',
            key: 'barcode',
        },
        {
            title: 'Brand',
            dataIndex: 'supplier',
            key: 'supplier',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: 'Price (UZS)',
            key: 'priceUzs',
            render: (_, record) =>
                record.stocks?.[0]?.sellPrice?.UZS
                    ? record.stocks[0].sellPrice.UZS.toLocaleString()
                    : '-',
        },
        {
            title: 'Price (USD)',
            key: 'priceUsd',
            render: (_, record) =>
                record.stocks?.[0]?.sellPrice?.USD
                    ? `$${record.stocks[0].sellPrice.USD}`
                    : '-',
        },
        {
            title: 'Stock',
            key: 'stock',
            render: (_, record) =>
                record.stocks?.[0]?.count ?? 0,
        },
        {
            title: 'Last updated',
            dataIndex: 'lastUpdateTime',
            key: 'lastUpdateTime',
        },
    ];

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg">Products</h3>
            <Table
                loading={isLoading}
                dataSource={data?.items}
                columns={columns}
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
