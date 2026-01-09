import { Button } from "antd";
import { handleLogout } from "../../utils/utils";

export default function Header() {
    return (
        <header className="py-3 bg-gray-400/10 px-3 flex items-center justify-between">
            <p>header</p>
            <Button variant='solid' color="blue" onClick={handleLogout}>Logout</Button>
        </header>
    )
}
