import React, {useState} from "react";
import {Col, Container, Form, FormGroup, Row} from "reactstrap";
import {toast} from "react-toastify";

import {db, storage} from "../firebase.config";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {collection, addDoc} from 'firebase/firestore';
import {useNavigate} from "react-router-dom";

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterSortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    // console.log("state ozgarsa")

    //  file limits 5mb
    const [file, setFile] = useState(null)

    const allowedTyps = ['image/jpg', 'image/png', 'image/pdf']

    const maxSize = 3*1024*8  // 5mb byts limits
    // 1mb = 1024bayt
    // 1bayt = 8bit
    // 3 * 1024 * 8

    const fileLimits = (event) =>{
        const selectedFile = event.target.file[0]
        if(selectedFile && allowedTyps.includes(selectedFile.type) && selectedFile.size > maxSize){
            alert('File size should not exceed 3MB');
        }
    }


    const addProduct = async (e) => {
        console.log("submit boldi")
        e.preventDefault()
        setLoading(true)

        // const product = {
        //     title: enterTitle,
        //     shortDesc : enterShortDesc,
        //     description: enterDescription,
        //     category: enterCategory,
        //     price: enterPrice,
        //     imgUrl: enterProductImg
        // };

        //         //  =======   add product to the firebace database (dd mahsulotini firebace ma'lumotlar bazasiga joylashtiring)   =========

        try {

            const docRef = await collection(db, 'products')
            console.log(docRef, 'here')

            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)



            uploadTask.on(() => {
                toast.error('images not uploaded')
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shortDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        imgUrl: downloadURL,
                    })
                })
            });

            setLoading(false)
            toast.success('product successfully added')
            navigate("/dashboard/all-products")
            // console.log(uploadTask)

        } catch (err) {
            setLoading(false)
            toast.error('product not added')
        }
        // console.log(product)
    }


    return <>
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        {
                            loading ? <h4 className='py-5'> Loading..... </h4> :
                            <>
                            <h4 className='mb-5'>Add Product</h4>
                            <Form onSubmit={addProduct}>
                            <FormGroup className='form_group'>
                            <span>Product title</span>
                            <input type="text" placeholder='kompyuter'
                            value={enterTitle} onChange={e => setEnterTitle(e.target.value)}
                            required/>
                            </FormGroup>
                            <FormGroup className='form_group'>
                            <span>Short Description</span>
                            <input type="text" placeholder='lorem.....'
                            value={enterShortDesc} onChange={e => setEnterSortDesc(e.target.value)}
                            required/>
                            </FormGroup>
                            <FormGroup className='form_group'>
                            <span>Description</span>
                            <input type="text" placeholder='Description....'
                            value={enterDescription} onChange={e => setEnterDescription(e.target.value)}
                            required/>
                            </FormGroup>

                            <div className='d-flex align-items-center justify-content-between gap-5'>
                            <FormGroup className='form_group w-50'>
                            <span>Price</span>
                            <input type="number" placeholder='$100'
                            value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required/>
                            </FormGroup>

                            <FormGroup className='form_group w-50'>
                            <span>Category</span>
                            <select className='w-100 p-2'
                            value={enterCategory} onChange={e => setEnterCategory(e.target.value)}
                            required>
                            <option value="">Select category</option>
                            <option value="kompyuter">Kompyuter</option>
                            <option value="fotoVideoTexnika">Photo Video Technology</option>
                            <option value="mobile">Mobile</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                            </select>
                            </FormGroup>

                            </div>

                            <div>
                            <FormGroup className='form_group'>
                            <span>Product Image</span>
                            <input type="file" onChange={e => setEnterProductImg(e.target.files[0])}
                                   onBlur={fileLimits} required/>
                            </FormGroup>
                            </div>

                            <button className="buy_btn " type='submit'>Add Product</button>
                            </Form>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}


export default AddProducts;