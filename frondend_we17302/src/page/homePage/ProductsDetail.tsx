import React, { useEffect, useState } from 'react'
import { IProducts } from '../../interfaces/products'
import { useParams } from 'react-router-dom'
import { getOneProducts } from '../../api/products'

type IProps = {
    products: IProducts[]
    // categories: any
}


const ProductsDetail = (props: IProps) => {
    const { id } = useParams()
    console.log('_id :>> ', id);
    const [pro, setProduct] = useState<any>([])
    useEffect(() => {
        getOneProducts(id).then(({ data }) => setProduct(data.product))
    }, [])
    // console.log('products :>> ', pro);

    if (!pro) return <div>loading...</div>
    return (
        <div>
            {/* {pro.map((pro: any) => ( */}
            <section>
                <div className="text">
                    <h1>{pro.name}</h1>
                </div>
                <div className="o_long_xoai_kem_ca_phe">
                    <div className="anh_o_long_xoai">
                        <img src={pro.images} alt="" />
                    </div>
                    <div className="dat_hang_o_long_xoai">
                        <h2>ĐẶT HÀNG</h2>
                        <form action="">
                            <p>Chọn loại</p>
                            <div className="chon_loai">
                                <div className="s1">
                                    <input type="radio" id='lanh' name='chon_loai' /><label htmlFor="">Lanh</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id='nong' name='chon_loai' /><label htmlFor="">NÓNG</label>
                                </div>
                            </div>
                            <p>Chọn SIZE</p>
                            <div className="chon_loai">
                                <div className="s1">
                                    <input type="radio" id='size M' name='chon_size' /><label htmlFor="">Size M</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id='size L' name='chon_size' /><label htmlFor="">Size L</label>
                                </div>
                            </div>
                            <p>Chọn đường</p>
                            <div className="chon_loai">
                                <div className="s1">
                                    <input type="radio" id='khong_duong' name='chon_duong' /><label htmlFor="">Không Đường</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id='duong_30' name='chon_duong' /><label htmlFor="">30% đường</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_50" name="chon_duong" /><label>50% đường</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_70" name="chon_duong" /><label >70% đường</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_100" name="chon_duong" /><label >100% đường</label>
                                </div>
                            </div>
                            <p>Chọn đá</p>
                            <div className="chon_loai">
                                <div className="s1">
                                    <input type="radio" id="khong_da" name="chon_da" /><label >Không Đá</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_30" name="chon_da" /><label >30% đá</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_50" name="chon_da" /><label >50% đá</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_70" name="chon_da" /><label >70% đá</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="duong_100" name="chon_da" /><label >100% đá</label>
                                </div>
                                <div className="s1">
                                    <input type="radio" id="khong_da_mat" name="chon_da" /><label >Không đá mát</label>
                                </div>
                            </div>
                            <p>chọn Topping</p>
                            <div className="topping">
                                <div className="s2">
                                    <input type="checkbox" id="tran_chau_suong_mai" className="topping1" /><label >Thêm Trân Châu Sương Mai</label>
                                </div>
                                <p>+9.000đ</p>
                                <div className="s2">
                                    <input type="checkbox" id="tran_chau_baby" className="topping2" /><label >Thêm Trân Châu Baby</label>
                                </div>
                                <p>+8.000đ</p>
                                <div className="s2">
                                    <input type="checkbox" id="tran_chau_hoang_kim" className="topping3" /><label >Thêm Trân Châu Hoàng Kim</label>
                                </div>
                                <p>+9.000đ</p>
                            </div>
                            <button type='submit' className='dat_hang'>Đặt hàng</button>
                        </form>
                    </div>
                </div>
                <div className='thong_tin_vs_nguyen_lieu'>
                    <div className="thong_tin">
                        <h1>THÔNG TIN</h1>
                        <p>
                            {pro.details}
                        </p>
                    </div>
                    <div className='nguyen_lieu'>
                        <h1>NGUYÊN LIỆU</h1>
                        <p>
                            2 túi Trà ô long túi lọc  <p></p>
                            3 quả Xoài  <p></p>
                            1/2 quả Chanh <p></p>
                            30 mililit Siro xoài <p></p>
                            80 gam Đường <p></p>
                        </p>
                    </div>
                </div>
            </section>
            {/* ))} */}
        </div>
    )
}

export default ProductsDetail
