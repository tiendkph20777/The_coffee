import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category'
type IProps = {
    products: any
    categories: ICategory[]
    onAdd: (categories: ICategory) => void
}

const AddCategory = (props: IProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onAddSubmit = (categories: any) => {
        props.onAdd(categories)
        // console.log('products :>> ', products);
        navigate('/admin/category')
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onAddSubmit)}>
                Name <input type="text" {...register('name', { required: true })} className='form-control' />
                {errors.name && <span>Name không được để trống</span>}
                <br /><button className='btn'>Add</button>
            </form>
        </div>
    )
}

export default AddCategory
