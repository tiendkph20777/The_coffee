import React, { useEffect, useState } from 'react'
import { IProducts } from '../../../interfaces/products'
import { Link } from 'react-router-dom'
import Table, { ColumnsType } from 'antd/es/table'
import { Button, Popconfirm, Space, Tag, message } from 'antd'
import { getAllProducts, getOneProducts } from '../../../api/products'
import { getOneCategory } from '../../../api/category'
import axios from 'axios'
import {
    DeleteOutlined,
} from '@ant-design/icons';

type IProduct = {
    products: IProducts[]
    categories: any
    onRemove: (id: number | string) => void
}


const AdminProducts = ({ categories, products, onRemove }: IProduct) => {
    //call category để lấy name
    function CategoryName({ categoryId }: any) {
        const [categoryName, setCategoryName] = useState('');

        useEffect(() => {
            const getCategory = async () => {
                try {
                    const response = await getOneCategory(categoryId);
                    setCategoryName(response.data.name);
                } catch (error) {
                    console.log(error);
                }
            };

            getCategory();
        }, [categoryId]);

        return <span>{categoryName}</span>;
    }
    // kiểm tra dữ liệu products
    if (!products) return <div>loading...</div>

    //confirm remove
    const confirm = (id: any) => {
        onRemove(id);
        message.success('Click on Yes');
    };
    const cancel = () => {
        message.error('Click on No');
    };

    //định nghĩa các cột
    const columns: ColumnsType<any> = [
        {
            title: '#',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        Table.EXPAND_COLUMN,
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Images',
            key: 'images',
            render: (record) => (
                <Space size="middle">
                    <img src={record.images} alt="" style={{ maxWidth: 100 }} />
                </Space>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
            render: categoryId => <CategoryName categoryId={categoryId} />,
        },
        {
            title: <Link to={'/admin/products/add'}><Button>Add</Button></Link>,
            key: 'action',
            render: (record) => {
                return <Space size="middle">
                    <a>
                        <Link to={'/admin/products/update/' + record._id}><Button style={{ marginRight: 10, marginBottom: 10 }}>Update</Button></Link>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => confirm(record._id)}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary" danger style={{ marginBottom: 5 }}><DeleteOutlined /></Button>
                        </Popconfirm>
                    </a>
                </Space>
            },
        },
    ];

    return (
        <Table
            columns={columns}
            rowSelection={{}}
            expandable={{
                expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.details}</p>,
            }}
            dataSource={products}
        />
    )
}

export default AdminProducts
