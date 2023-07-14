import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../api/auth';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';


const SignUp: React.FC = () => {
    const navigate = useNavigate()
    // toast.configure({
    //     success: {
    //         duration: 2000
    //     }
    // });
    const onFinish = async (values: any) => {
        // toast.success(' Đăng nhập thành công !', {
        //     duration: 5000,
        // },
        // )
        const { data } = await signin(values)
        // console.log('data :>> ', data);
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1000, textAlign: 'center', paddingTop: '10%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {/* <Link to={'/signin'}><Button type='primary' style={{ marginRight: 20 }}>SignIn</Button></Link> */}
            <Link to={'/signup'}><Button type='primary'>SignUp</Button></Link>
            <div><Toaster /></div>

        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form >
};

export default SignUp;