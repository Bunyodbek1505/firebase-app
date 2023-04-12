import React, {useState} from 'react'
// import axios from 'axios'
import '../styles/checkout.css'

import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ul/CommonSection";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import axios from "axios";
// import context from "react-redux/src/components/Context";


const CheckOut = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const token = '6163937237:AAE2Otb-CaGlobn1lfcl4rvBH3ZqcEiVQ1k';
    const chatId = '1628145024';

    const [formData, setFormData] = useState({name: '', email: '', phone: '', adress: ''});

    //    form malumotlarini olish
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

    }
    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            adress: '',
        });
    };

    const handleClick = () => {
        const {name, email, phone, adress} = formData;
        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Adress: ${adress}`);

        const message = `
            New message:
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Adress: ${formData.adress}
          `;

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`

        fetch(url).then((res) => null)

        toast.success('Order received')
        handleClear()
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

    }

    return (
        <>
            <Helmet title='Chekout'></Helmet>
            <CommonSection title='Checkout'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='mb-4 fw-bold'> Billing Information</h6>

                            <Form className='billing_form' onSubmit={handleSubmit}>
                                <FormGroup className='form_group'>
                                    <input type="text" name="name" value={formData.name}
                                           onChange={handleInputChange} placeholder='Enter your name'/>
                                </FormGroup>

                                <FormGroup className='form_group'>
                                    <input type="email" name="email" value={formData.email}
                                           onChange={handleInputChange} placeholder='Enter your email'/>
                                </FormGroup>

                                <FormGroup className='form_group'>
                                    <input type="phone" name="phone" value={formData.phone}
                                           onChange={handleInputChange} placeholder=' Phone number '/>
                                </FormGroup>

                                <FormGroup className='form_group'>
                                    <input type="text" name="adress" value={formData.adress}
                                           onChange={handleInputChange} placeholder='Street address'/>
                                </FormGroup>

                            </Form>
                        </Col>

                        <Col lg='4'>
                            <div className="checkout_cart">
                                <h6>Total Qty: <span> {totalQty}</span></h6>
                                <h6>Subtotal: <span> ${totalAmount} </span></h6>
                                <h6><span> Shipping: <br/> <span className='fs-45'>free Shipping</span> </span>
                                    <span> $0</span></h6>
                                <h4>Total Cost: <span> ${totalAmount} </span></h4>

                                <button type='submit' className="buy_btn auth_btn w-100" onClick={handleClick}>
                                    {/*<Link > Place an order </Link >*/}
                                    Place an order
                                </button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default CheckOut