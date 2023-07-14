import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICategory } from '../../../interfaces/category';
import { Select, MenuItem } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { IProducts } from '../../../interfaces/products';


type Props = {
    categories: ICategory[];
    onAdd: (data: any) => void;
};

const AddProductForm = ({ categories, onAdd }: Props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProducts>();

    const [file, setFile] = useState({});

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };
    const onSubmit = handleSubmit((data: IProducts) => {
        onAdd(data)
        navigate('/admin/products')
        // console.log('data :>> ', file);
    });

    return (
        <form onSubmit={onSubmit} style={{ fontSize: 15 }}>
            <div>
                <label>Name</label>
                {errors.name && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Name</span>}
                <input type="text" {...register('name', { required: true })} className='form-control' />
            </div>
            <br />
            <div>
                <label>Price</label>
                {errors.price && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Price</span>}
                <input type="number" {...register('price', { required: true })} className='form-control' />
            </div>
            <br />
            <div>
                <label>Images</label>
                {errors.images && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Image</span>}
                <input type="text" {...register('images', { required: true })} className='form-control' />
            </div>
            <br />
            <div>
                <label>Details</label>
                {errors.details && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Details</span>}
                <textarea rows={4} {...register('details', { required: true })} className='form-control' />
            </div>
            <br />
            <div>
                <label style={{}}>Category</label>
                <Select {...register('categoryId', { required: true })} style={{ minWidth: 200, marginLeft: 30, paddingLeft: 10 }}>
                    {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id} style={{ minWidth: 200 }}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
                {errors.categoryId && <span style={{ marginLeft: 20, color: "red" }}>Bạn chưa nhập Category</span>}
            </div>
            <br />
            <button type="submit" className='btn'>Add</button>
        </form >
    );
};

export default AddProductForm;