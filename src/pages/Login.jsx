import React, {useState} from 'react'
import '../styles/login.css'

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase.config";
import {toast} from "react-toastify";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] =useState(false)

    const signIn = async(e)=>{
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            const user = userCredential.user

            console.log(user)
            setLoading(false)
            toast.success('Successfully logged in')
            navigate('/checkOut')
        } catch (error){
            setLoading(false)
            toast.error(error.message)
        }
    }

  return (
    <>
     <Helmet title='Login'></Helmet>
     <section>
      <Container>
       <Row>
           {
               loading?
                   (<Col lg='12' className='text-center'> <h5 className='fw-bold'>Loading...</h5></Col>)
                   :
                   (<Col lg='6' className='m-auto text-center'>
                       <h3 className='fw-bold mb-4'> Login </h3>

                       <Form className='auth_form' onSubmit={signIn}>
                           <FormGroup className="form_group">
                               <input type="email" placeholder='Enter you email'
                                      value={email} onChange={e=> setEmail(e.target.value)}
                               />
                           </FormGroup>

                           <FormGroup className="form_group">
                               <input type="password" placeholder='Enter you password'
                                      value={password} onChange={e=> setPassword(e.target.value)}
                               />
                           </FormGroup>

                           <button type='submit' className="buy_btn login_btn"> Login </button>
                           <p>Don't an account? {''}
                               <Link to='/signUp'> Create an account</Link>
                           </p>
                       </Form>
                   </Col>)

           }
       </Row>
      </Container>

     </section>

    </>
  )
}


export default Login