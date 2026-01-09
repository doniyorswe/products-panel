import { Menu } from "antd";
import {
    CodeOutlined,
    CodeSandboxOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useLocation, useNavigate } from "react-router";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '/', icon: <CodeSandboxOutlined />, label: 'Products' },
    { key: '/search', icon: <CodeOutlined />, label: 'Search Algo' },
]

export default function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function handleChange(path: string) {
        navigate(path)
    }

    return (
        <div className="py-3 pl-2 shadow-md min-w-52 h-full">
            <p className="pl-2 font-semibold">Products panel</p>

            <nav className="mt-4">
                <Menu
                    selectedKeys={[pathname]}
                    mode="vertical"
                    className='border-none'
                    items={items}
                    onSelect={v => handleChange(v.key)}
                />
            </nav>
        </div>
    )
}
