import { Flex } from "antd";
import LoginForm from "../views/login-form";

export default function LoginPage() {
    return (
        <Flex align="center" justify="center" className="h-screen" vertical>
            <h2 className="text-xl mb-3">Login</h2>
            <LoginForm />
        </Flex>
    )
}
