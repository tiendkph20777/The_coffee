import instance from "./instance";

export const getAllCategory = () => {
    return instance.get('/categories')
}
export const getOneCategory = (_id: string | number) => {
    return instance.get(`/categories/${_id}`)
}
export const deleteCategory = (_id: string | number) => {
    return instance.delete(`/categories/${_id}`, {
    })
}
export const updateCategory = (products: any) => {
    return instance.put(`/categories/${products._id}`, products)
}
export const addCategory = (products: any) => {
    return instance.post(`/categories`, products)
}
