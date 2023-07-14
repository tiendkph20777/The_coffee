import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProducts } from '../../../interfaces/products'
import { useNavigate, useParams } from 'react-router-dom'
import { Select } from 'antd'
import { MenuItem } from '@material-ui/core'
type IProps = {
    products: IProducts[]
    categories: any
    onUpdate: (products: IProducts) => void
}

const AddProducts = (props: IProps) => {
    const navigate = useNavigate();//khởi tạo navigate để điều hướng
    const { id } = useParams() // lấy id từ url
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        const currentProduct = props.products.find((item) => item._id == id)// tìm sản phẩm cần update
        reset(currentProduct)
    }, [props])
    const onAddSubmit = (products: any) => {
        props.onUpdate(products)
        navigate('/admin/products')
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Update Products</h1>
            <form action="" onSubmit={handleSubmit(onAddSubmit)}>
                Name
                <input type="text" {...register('name', { required: true })} className='form-control' />
                {errors.name && <span>Name không được để trống</span>}
                <br />
                Price
                <input type="number" {...register('price', { required: true })} className='form-control' />
                {errors.price && <span>Price không được để trống</span>}
                <br />
                Images
                <input type="text" {...register('images', { required: true })} className='form-control' />
                {errors.images && <span>Images không được để trống</span>}
                <br />
                Deatails
                {errors.details && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Details</span>}
                <textarea rows={4} {...register('details', { required: true })} className='form-control' />
                <br />
                {/* CategoryID
                <input type="text" {...register('categoryId')} className='form-control' />
                {errors.categoryId && <span>categoryID không được để trống</span>} */}
                <div>
                    <label style={{}}>Category</label>
                    <Select {...register('categoryId', { required: true })} style={{ minWidth: 200, marginLeft: 30, paddingLeft: 10 }}>
                        {props.categories.map((category: any) => (
                            <MenuItem key={category._id} value={category._id} style={{ minWidth: 200 }}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.categoryId && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Category</span>}
                </div>
                <br /><button className='btn'>Add</button>
            </form>
        </div>
    )
}

export default AddProducts
