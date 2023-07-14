import React from 'react'
import { IProducts } from '../../interfaces/products'
import { Link } from 'react-router-dom'
import { Button, Col, Divider, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

type IProps = {
    products: IProducts[]
    categories: any
}

const Products = ({ products, categories }: IProps) => {
    function getCategoryName(categoryId: any) {
        const category = categories.find((category: any) => category._id === categoryId);
        return category ? category.name : '';
    }
    console.log('products :>> ', products);

    if (!products) return <div>loading...</div>

    return (
        <div style={{ textAlign: "center" }}>
            <section id='text' style={{ marginBottom: 50 }}>
                <div className="thong_tin">
                    <p className="text_1">ToCoToCo Menu</p>
                    <p className="text_2">SẢN PHẨM NỔI BẬT</p>
                    <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp" alt="" />
                </div>
            </section>
            {/* <Divider orientation="left">Products</Divider> */}
            <Row gutter={18}>
                {products.map((item, index) => (
                    <Col className="gutter-row" span={6}>
                        <div style={{ paddingBottom: 30 }}>
                            <Link to={'/detail/' + (item._id)} className='list-group-item'>
                                <img src={item.images} alt="" style={{ maxWidth: '100%' }} />
                            </Link>
                            <p style={{ fontSize: "120%" }}>{item.name}</p>
                            <p style={{}}>{item.price}đ</p>
                            <Link to={'/detail/' + (item._id)} className='list-group-item'>
                                <Button type="primary" className='colorBgTextHover'> Đặt Hàng</Button>
                            </Link>

                        </div>
                    </Col>
                ))}
                <div className="nut_xem_tat_ca_san_pham_noi_bat" style={{ width: "100%", margin: 20 }}>
                    <a href="" style={{ borderRadius: 7, fontSize: 20 }}>Xem Tất Cả</a>
                </div>
            </Row>
        </div >
    )
}

export default Products
