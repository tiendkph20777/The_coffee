import React, { useState } from 'react';
import { Layout, Menu, MenuProps, MenuTheme, Switch, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import {
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button } from 'antd/es/radio';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [themes, setTheme] = useState<MenuTheme>('dark');
    // const [current, setCurrent] = useState('1');
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };
    return (
        <Layout className="layout">
            <header id="header">
                <section className="do_dai_trang">
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-bnt-m5QdM2LTZqeFW00k0MZ243DMoIXkg&usqp=CAU" alt="" />
                    </div>
                    <div className="menu" style={{ fontSize: "150%" }}>
                        <ul>
                            <li><Link to={'/'}>Trang Chủ</Link></li>
                            <li><Link to={'/category'}>Sản Phẩm</Link></li>
                            <li><Link to={'/'}>Giới Thiệu</Link></li>
                            <li style={{ float: "right", width: "200px" }}><Link to={'/signup'}>SignIn</Link></li>
                        </ul>
                    </div>
                </section>
            </header>
            <Content style={{ padding: ' 0 100px' }}>
                <div className="site-layout-content">
                    <main><Outlet /></main>
                </div>
            </Content>
            <div id="text">
                <p className="text1">Tin Tức và Khuyến Mãi </p>
                <p className="text2">KHÁM PHÁ TOCOTOCO NHẬN NGAY KHUYẾN MẠI </p>
                <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp" alt="" />
            </div>
            <section className="tocotoco_ve_chung_toi" style={{ maxWidth: "86%", marginLeft: "7%" }}>
                <div>
                    <p className="text1">ToCoToCO Story</p>
                    <p className="text2">VỀ CHÚNG TÔI</p>
                    <img src="" alt="" />
                    <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp" alt="" />
                    <p className="text3">
                        Bên cạnh niền tự hào về những ly trà sữa ngon - sạch - tươi. <p></p>
                        chúng tôi luôn tự tin mang đến cho khách hàng những trải nghiệm <p></p>
                        tốt nhất về dịch vụ và không gian.
                    </p>
                    <a href="">XEM THÊM</a>
                </div>
            </section>
            <section className="tocotoco_nhuong_quyen" style={{ maxWidth: "86%", marginLeft: "7%", marginBottom: "5%" }}>
                <div className="text">
                    <p className="text1">ToCoToCO Franchise</p>
                    <p className="text2">NHƯỢNG QUYỀN</p>
                    <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp" alt="" />
                    <p className="text3">
                        Gia nhập đế chế 300 TRIỆU USD. Nếu bạn bắt đầu kinh doanh khởi <p></p>
                        nghiệp ẩm thực, hoặc muốn đầu tư vào lĩnh vực này, thương hiệu <p></p>
                        TocoToco chắc chăn sẽ là một lựa chọn đáng cân nhắc cho bạn.
                    </p>
                    <a href="">XEM THÊM</a>
                </div>
                <div className="anh_text">
                    <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/img_home_franchise.png" alt="" />
                </div>
            </section>

            <Footer id='footer'>
                <section className='do_dai_trang'>
                    <div className='dia_chi_quan'>
                        <div className="logo_footer">
                            <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/ft_logo.png" alt="" />
                        </div>
                        <div className='dia_chi'>
                            <h3>CÔNG TY CP TM & DV TACO VIỆT NAM</h3>
                            <p><i className="fas fa-map-marker"></i> Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.</p>
                            <p><i className="fas fa-phone"></i> 1900.63.69.36</p>
                            <p>info@tocotocotea.com</p>
                            <p><i className="fas fa-envelope"></i> Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017</p>
                            <p>Nơi cấp: Sở kế hoạch và đầu tư Thành phố Hà Nội.</p>
                            <div className="icon_dia_chi">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-google-plus"></i>
                            </div>
                        </div>
                        <div className="ve_chung_toi">
                            <h3>VỀ CHÚNG TÔI</h3>
                            <p>Giới thiệu về tocotoco</p>
                            <p>Nhượng quyền</p>
                            <p>Tin tức khuyến mại </p>
                            <p>Cửa hàng</p>
                            <p>Quy định chung</p>
                            <p>TT liên hệ & ĐKKD</p>
                        </div>
                        <div className="ve_chung_toi">
                            <h3>CHÍNH SÁCH</h3>
                            <p>Chính sách thành viên</p>
                            <p>Hình thức thanh toán</p>
                            <p>Vận CHuyển Giao Nhận</p>
                            <p>Đổi trả và hoàn tiền</p>
                            <p>Bảo vệ thông tin cá nhân</p>
                            <p>Bảo trì , bảo hành</p>
                        </div>
                    </div>
                    <hr />
                    <div className="loi_ket">
                        <p className="ket1">TOCOTOCO - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản Việt Nam</p>
                        <p>Copyrights @ 2019 by ToCoToCoTea. All rihgts reserved.</p>
                    </div>
                </section>
            </Footer>
        </Layout >
    );
};

export default App;