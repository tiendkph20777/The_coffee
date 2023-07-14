import "bootstrap/dist/css/bootstrap.min.css"
import "./tragn_chu.css"
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsLayout from './page/layout/productsLayout'
import AdminLayout from './page/layout/adminLayout'
import Products from './page/homePage/Products'
import AdminProducts from './page/admin/products/AdminProducts'
import { addProduct, deleteProduct, getAllProducts, updateProduct } from './api/products'
import { IProducts } from './interfaces/products'
import AddProducts from "./page/admin/products/AddAdminProducts"
import UpdateProducts from "./page/admin/products/UpdateAdminProducts"
import Signin from "./page/login/Signin"
import { addCategory, deleteCategory, getAllCategory, updateCategory } from "./api/category"
import ProductsDetail from "./page/homePage/ProductsDetail"
import SignUp from "./page/login/Signup"
import AdminCategory from "./page/admin/category/AdminCategory"
import AddCategory from "./page/admin/category/AddCategory"
import UpdateCategory from "./page/admin/category/UpdateCategory"
import { ICategory } from "./interfaces/category"
import CategoryHome from "./page/homePage/CategoryHome"

function App() {
  ///// category
  const [categories, setCategory] = useState<ICategory[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory()
      setCategory(data.categories)
      // console.log('category :>> ', data.categories);
    })()
  }, [])
  const onhandleRemoveCate = async (_id: number | string | undefined) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không')
    if (confirm) {
      await deleteCategory(_id!).then((data => setCategory(categories.filter((item) => item._id !== _id))))
    }
  }
  const onhandleAddCate = (category: any) => {
    addCategory(category).then(() => getAllCategory().then(({ data }) => setCategory(data.categories)))
  }
  const onHandleUpdateCate = (category: any) => {
    updateCategory(category).then(() => { setCategory(categories.map((item) => item._id === category._id ? category : item)) })
  }
  ////// prodcucts
  const [products, setproducts] = useState<IProducts[]>([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts()
      setproducts(data.products)
    })()
  }, [])
  const onhandleRemove = async (_id: number | string | undefined) => {
    await deleteProduct(_id!).then((data => setproducts(products.filter((item) => item._id !== _id))))
  }
  const onhandleAdd = (product: any) => {
    addProduct(product).then(() => getAllProducts().then(({ data }) => setproducts(data.products)))
  }
  const onHandleUpdate = (product: any) => {
    updateProduct(product).then(() => { setproducts(products.map((item) => item._id == product._id ? product : item)) })
  }
  return (
    <div className="App">
      <Routes>
        {/* router đăng nhập */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        {/* router home page */}
        <Route path='/' element={< ProductsLayout />}>
          <Route index element={< Products products={products} categories={categories} />} />
          <Route path="detail/:id" element={< ProductsDetail products={products} />} />
          <Route path="category" element={< CategoryHome products={products} categories={categories} />} />
        </Route>
        {/* router admin */}
        <Route path='/admin' element={< AdminLayout />}>
          {/* prodcust */}
          <Route path="products">
            <Route index element={<AdminProducts products={products} onRemove={onhandleRemove} categories={categories} />} />
            <Route path="add" element={<AddProducts onAdd={onhandleAdd} categories={categories} />} />
            <Route path="update/:id" element={<UpdateProducts products={products} onUpdate={onHandleUpdate} categories={categories} />} />
          </Route>
          {/* category */}
          <Route path="category">
            <Route index element={<AdminCategory products={products} onRemove={onhandleRemoveCate} categories={categories} />} />
            <Route path="add" element={<AddCategory onAdd={onhandleAddCate} products={products} categories={categories} />} />
            <Route path="update/:id" element={<UpdateCategory products={products} onUpdate={onHandleUpdateCate} categories={categories} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
