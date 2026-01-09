import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import usePost from '../services/hooks/use-post';
import { type AuthPayload } from "../types"
import { authStore } from '../store/auth-store';

type FieldType = {
    _username?: string;
    _password?: string;
    _subdomain?: string;
};

export default function LoginForm() {
    const { mutate, isPending } = usePost({
        mutateOptions: {
            onSuccess(data: AuthPayload) {
                authStore.set(data)
                window.location.replace('/')
            }
        },
        config: {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    })

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        values._subdomain = 'toko'
        mutate('security/auth_check', values)
    };

    return (
        <Form
            style={{ minWidth: 300 }}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
                _username: 'user_task',
                _password: 'user_task',
            }}
        >
            <Form.Item<FieldType>
                label="Username"
                name="_username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="_password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className='w-full' loading={isPending}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}