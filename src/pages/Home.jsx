import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";
import {motion} from "framer-motion";
// import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/concept2.jpg";

import Services from "../services/Services";
import ProductsList from "../components/Ul/ProductsList";
import Clock from "../components/Ul/Clock";

// import counterImg from "../assets/images/counter-timer-img.png"

import useGetDate from "../custom-hooks/useGetDate";

const Home = () => {

    const {data: products, loading} = useGetDate('products')


    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(() => {
        const filterTrendingProducts = products.filter((item) => item.category === "kompyuter");

        const filterBestSalesProducts = products.filter((item) => item.category === "fotoVideoTexnika");

        const filterMobileProducts = products.filter((item) => item.category === "mobile");

        const filterWirelessProducts = products.filter((item) => item.category === "wireless");

        const filterPopularProducts = products.filter((item) => item.category === "watch");


        setTrendingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts)
        setMobileProducts(filterMobileProducts)
        setWirelessProducts(filterWirelessProducts)
        setPopularProducts(filterPopularProducts)
    }, [products]);

    return (
        <>
            <Helmet title={"Home"}> </Helmet>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero_content">
                                <p className="hero_subtitle">Tending product in {year}</p>
                                <h2>Make you Interion More Minimalistic & Modern</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                                    nesciunt quo voluptatem earum quam, similique laudantium,
                                    doloremque quisquam cum molestias esse doloribus.
                                </p>

                                <motion.button whileTap={{scale: 1.2}} className="buy_btn">
                                    <Link to="/shop">Shop Now</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero_img">
                                <img src={heroImg} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services/>

            {/*   Trending Products  Products   */}

            <section className="trending_ptoduct">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section_title">Kompyuter</h2>
                        </Col>

                        {
                            loading ? <h5 className='fw-bold'>Loading....</h5> :
                                <ProductsList data={trendingProducts}/>
                        }


                    </Row>
                </Container>
            </section>

            {/* Best Sales  Products */}
            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section_title">Photo Video Technology</h2>
                        </Col>

                        {
                            loading ? <h5 className='fw-bold'>Loading....</h5> :
                                <ProductsList data={bestSalesProducts}/>
                        }

                    </Row>
                </Container>
            </section>

            {/*  Timer  */}
            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg="6" md='12' className="text">
                            <div className="clock_top-content">
                                <h4 className="text-white fs-6">Limited Offers</h4> <br/>
                            </div>

                            <Clock/>

                            <motion.button whileTap={{scale: 1.1}} className="buy_btn store_btn">
                                <Link to='/shop'>Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg="6" md='12' className="text-end counter_img">
                            {/* <img src={counterImg} alt=""/> */}
                        </Col>

                    </Row>
                </Container>
            </section>

            {/*    New  Arrivals */}

            <section className="new_arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2 className="section_title">New Arrivals</h2>
                        </Col>
                        {
                            loading ? <h5 className='fw-bold'>Loading....</h5> :
                                <ProductsList data={mobileProducts}/>
                        }

                        {
                            loading ? <h5 className='fw-bold'>Loading....</h5> :
                                <ProductsList data={wirelessProducts}/>
                        }

                    </Row>
                </Container>
            </section>

            {/*  Popular   category  */}
            <section className="popular_category mb-5">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section_title">Popular in Category</h2>
                        </Col>

                        {
                            loading ? <h5 className='fw-bold'>Loading....</h5> :
                                <ProductsList data={popularProducts}/>
                        }

                    </Row>
                </Container>
            </section>


        </>
    );
};

export default Home;
