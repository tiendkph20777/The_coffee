import React, { useEffect, useState } from 'react'
// import { IProducts } from '../../interfaces/products'
import { Link } from 'react-router-dom'
import { ICategory } from '../../../interfaces/category'

type IProduct = {
    products: any
    categories: ICategory[]
    onRemove: (_id: number | string) => void
}

const AdminCategory = ({ categories, products, onRemove }: IProduct) => {
    console.log('object :>> ', categories);

    if (!categories) return <div>loading...</div>

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th><Link to={'/admin/category/add'}><button className='btn'>Add Category</button></Link></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cate, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            {/* <th>{cate._id}</th> */}
                            <th>{cate.name}</th>
                            <th>
                                <button className='btn' onClick={() => onRemove(cate._id!)}>Remove</button>
                                <Link to={'/admin/category/update/' + (cate._id!)}><button className='btn'>Update</button></Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCategory
