import React from 'react'
import { IProducts } from '../../interfaces/products'
import { Link } from 'react-router-dom'
import { Button, Col, Divider, Row } from 'antd';
import { ICategory } from '../../interfaces/category';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

type IProps = {
    products: IProducts[]
    categories: ICategory[]
}
const CategoryHome = ({ products, categories }: IProps) => {
    function getCategoryName(categoryId: any) {
        const category = categories.find((category: any) => category._id === categoryId);
        return category ? category.name : '';
    }
    if (!products) return <div>loading...</div>
    console.log('categories :>> ', categories);

    return (
        <div>
            <section className="do_dai_trang">
                <div className="danh_muc_san_pham">
                    <div className="danh_muc">
                        <p><h1>DANH MỤC</h1></p>
                        {categories.map((cate) => (
                            <div className="cate">
                                <Link to={''}><span className="namecate" style={{ fontSize: 20, lineHeight: 1 }}>{cate.name}</span></Link>
                            </div>
                        ))}
                    </div>
                    <div className="san_pham">
                        <p className="tieu_de">Món nổi bật</p>
                        <div className="mon_noi_bat" >
                            {products.map((pro, index) => (

                                <div className="s1" >
                                    <img src={pro.images} alt="" />
                                    <h2>{pro.name}</h2>
                                    <p>{pro.price}đ</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="gio_hang">
                        <div className="text">
                            <h1>GIỎ HÀNG CỦA TÔI</h1>
                        </div>
                        <div className="mat_hang_gio_hang">
                            <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png" alt="" />
                            <p>*</p>
                            <p>0</p>
                            <p>=</p>
                            <p>0đ</p>
                        </div>
                        <div className="thanh_toan">
                            <a href="">Thanh toán</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default CategoryHome

