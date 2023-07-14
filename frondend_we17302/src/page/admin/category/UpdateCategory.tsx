import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category'
type IProps = {
    products: ICategory[]
    categories: ICategory[]
    onUpdate: (categories: ICategory) => void
}

const UpdateCategory = (props: IProps) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        const currentProduct = props.categories.find((item) => item._id == id)
        reset(currentProduct)
    }, [props])
    const onAddSubmit = (categories: any) => {
        props.onUpdate(categories)
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

export default UpdateCategory
