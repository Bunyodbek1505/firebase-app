import React from "react";
import '../styles/dashboard.css'

import {Container, Row, Col} from "reactstrap";
import useGetDate from "../custom-hooks/useGetDate";

const Dashboard = () => {

    const {data:products} = useGetDate('products')
    const {data:users} = useGetDate('users')

    return <>
        <section>
            <Container>
                <Row>
                    <Col className="lg-3">
                        <div className="revenue_box">
                            <h5>Total Sales</h5>
                            <span>$500</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="order_box">
                            <h5>Order</h5>
                            <span>900</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="product_box">
                            <h5>Total Products</h5>
                            <span> {products.length} </span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                        <div className="users_box">
                            <h5>Total Users</h5>
                            <span> {users.length} </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}


export default Dashboard;