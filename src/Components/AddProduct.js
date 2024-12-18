import React, { useState } from 'react'
import { addProduct } from '../Redux/Actions/ProductActions';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [sku, setSku] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [discountPrice, setDiscountPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [weight, setWeight] = useState('');
    const [video, setVideo] = useState('');

    const dispatch = useDispatch();
    const client = useSelector(state =>  state.ClientReducers.client?.client);

    const handleClick = () => {
        if(name && description && price && imgUrl && sku && category && brand && model && discountPrice && stockQuantity && weight && video){
            const images=[{img:imgUrl}];
            dispatch(addProduct({ name, description, price,images, sku, category, brand, model, discountPrice, stockQuantity, weight, video , clientID:client._id }));
        props.setShow(false)
        }
    };
    const back = () => {
        props.setShow(false)
    }
console.log(props)
    return (
        <div className='card m-2'>
            <h2 className='text-center mt-2 mb-4'>Add New Product</h2>
            <Form className='mx-2'>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Product Name</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-label="Product Name"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Description</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                aria-label="Description"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Price</InputGroup.Text>
                            <Form.Control
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                aria-label="Price"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Image URL</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                aria-label="Image URL"
                            />
                        </InputGroup>
                    </Col>

                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>SKU</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={sku}
                                onChange={(e) => setSku(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Brand</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Category</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Discount Price</InputGroup.Text>
                            <Form.Control
                                type="number"
                                value={discountPrice}
                                onChange={(e) => setDiscountPrice(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Model</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Stock Quantity</InputGroup.Text>
                            <Form.Control
                                type="number"
                                value={stockQuantity}
                                onChange={(e) => setStockQuantity(e.target.value)}
                            />
                        </InputGroup>
                    </Col>

                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Weight</InputGroup.Text>
                            <Form.Control
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text style={{ width: '130px' }}>Video</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={video}
                                onChange={(e) => setVideo(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <div className='d-flex justify-content-end'>
                <Button className='my-2 me-2' 
                 style={{backgroundColor:"#b47651" , borderColor:"#b47651"}}
 onClick={handleClick}>Save</Button>
                <Button className='my-2'   style={{backgroundColor:"#b0572d" , borderColor:"#b0572d"}}
 onClick={back}>Back</Button>
                </div>
            </Form>
        </div>
    );
}

export default AddProduct;
