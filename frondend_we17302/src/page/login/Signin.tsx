// import React from 'react'
import { useForm } from 'react-hook-form'
import { signin } from '../../api/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'

// type IProps = {}

const Signin = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (inputValue: any) => {
        const { data } = await signin(inputValue)
        localStorage.setItem('user', JSON.stringify(data))
        console.log('data :>> ', data);
        navigate('/admin/products')
    }
    return (
        <div className='container' style={{ maxWidth: 600, marginTop: '10%' }}>
            <Link to={'/signin'}><Button type='primary' style={{ marginRight: 20 }}>SignIn</Button></Link>
            {/* <Link to={'/signup'}><Button type='primary'>SignUp</Button></Link> */}
            <form action="" onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                Email<input type="text" {...register('email', { required: true })} className='form-control' />
                {errors.email && <span>email không được để trống</span>}
                <br />Password<input type="password" {...register('password', { required: true })} className='form-control' />
                {errors.password && <span>password không được để trống</span>}
                <br /><button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Signin

// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { Link } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// // const navigate = useNavigate()

// const onFinish = (values: any) => {
//     // console.log('Success:', values);
//     localStorage.setItem('user', JSON.stringify(values))
//     // console.log('data :>> ', data);
//     // navigate('/admin')
// };

// const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
// };

// const SignIn: React.FC = () => (
//     <Form
//         name="basic"
//         labelCol={{ span: 10 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 1000, textAlign: 'center', paddingTop: '10%' }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Link to={'/signin'}><Button type='primary' style={{ marginRight: 20 }}>SignIn</Button></Link>
//             <Link to={'/signin'}><Button type='primary'>SignUp</Button></Link>
//         </Form.Item>
//         <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//             <Input.Password />
//         </Form.Item>

//         {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//             <Checkbox>Remember me</Checkbox>
//         </Form.Item> */}

//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Button type="primary" htmlType="submit">
//                 Submit
//             </Button>
//         </Form.Item>
//     </Form >
// );

// export default SignIn;
