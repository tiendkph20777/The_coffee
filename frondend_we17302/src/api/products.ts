import instance from "./instance";

const token = JSON.parse(localStorage.getItem("user")!)

export const getAllProducts = () => {
    return instance.get('/products')
}
export const getOneProducts = (id: any) => {
    return instance.get(`/products/${id}`)
}
export const deleteProduct = (id: string | number) => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token.accessToken} `
        }
    })
}
export const updateProduct = (products: any) => {
    return instance.put(`/products/${products._id}`, products, {
        headers: {
            Authorization: `Bearer ${token.accessToken} `
        }
    })
}
export const addProduct = (products: any) => {
    return instance.post(`/products`, products, {
        headers: {
            Authorization: `Bearer ${token.accessToken} `
        }
    })
}
