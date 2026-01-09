import type { TableColumnsType } from 'antd';
import type { Product } from '../types';
import { useMemo } from 'react';

export const useProductCols = () => useMemo<TableColumnsType<Product>>(() => [
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
], [])