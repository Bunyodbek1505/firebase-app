import React, {useState} from 'react'
import '../styles/shop.css'

import CommonSection from "../components/Ul/CommonSection";
import products from "../assets/data/products";
import ProductsList from "../components/Ul/ProductsList";

import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";

import useGetDate from "../custom-hooks/useGetDate";


const Shop = () => {

    const [productsDate, setProductsDate] = useState([])

    const {data: products, loading} = useGetDate('products')

    const hendleFilter = e => {
        const filterValue = e.target.value
        if (filterValue === 'fotoVideoTexnika') {
            const fileteredProducts = products.filter(item => item.category === 'fotoVideoTexnika');
            setProductsDate(fileteredProducts)
        }

        if (filterValue === 'mobile') {
            const fileteredProducts = products.filter(item => item.category === 'mobile');
            setProductsDate(fileteredProducts)
        }

        if (filterValue === 'kompyuter') {
            const fileteredProducts = products.filter(item => item.category === 'kompyuter');
            setProductsDate(fileteredProducts)
        }

        if (filterValue === 'watch') {
            const fileteredProducts = products.filter(item => item.category === 'watch');
            setProductsDate(fileteredProducts)
        }

        if (filterValue === 'wireless') {
            const fileteredProducts = products.filter(item => item.category === 'wireless');
            setProductsDate(fileteredProducts)
        }

    }

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        // setProductsDate(searchedProducts)
    }

    return (<>
            <Helmet title='Shop'> </Helmet>

            <CommonSection title='Products'/>

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className='filter_widget'>
                                <select onClick={hendleFilter}>
                                    <option>Filter by Category</option>
                                    <option value="kompyuter">Kompyuter</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="fotoVideoTexnika">Foto-videoTexnika</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wirelsee</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className='text-end'>
                            <div className='filter_widget'>
                                <select name="" id="">
                                    <option> Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className="search_box">
                                <input type="text" placeholder='Search.....' onChange={handleSearch}/>
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {products.length === 0 ? <h1 className='text-center fs-4' >No products are found!</h1> :
                            <ProductsList data={products}/>}
                    </Row>
                </Container>
            </section>
        </>)
}


export default Shop;