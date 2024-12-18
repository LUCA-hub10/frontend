import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, productBuy } from '../Redux/Actions/ProductActions';
import { Button } from 'react-bootstrap';

function ProductDetails() {
    const dispatch = useDispatch();
    const id = useSelector(state => state.ProductReducer?.productDetail);
    const product = useSelector(state => state.ProductReducer?.currentProduct);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [yourQuantity , setYourQuantity] = useState(1);

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch]);

    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };

    const buypro = (quantity) => {
        let newQuantity = parseInt(quantity, 10);
        if (newQuantity <= 0) {
            newQuantity = 1;
        } else if (newQuantity > product?.stockQuantity) {
            newQuantity = product?.stockQuantity;
        }
        setYourQuantity(newQuantity);
    };

const buy = () => {
    dispatch(productBuy({product,yourQuantity}))
}
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2 className="card-title mx-4 my-3 text-dark">Product Details</h2>
                    <div className="imgheb">
                        <div className="lingalleryContainer">
                            <div className="lingallery mt-3 w-100">
                                <div className="container-fluid d-flex align-items-center justify-content-center">
                                    <div className="row justify-content-center g-1">
                                        <div id="carouselItems" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                {product?.images?.map((image, index) => (
                                                    <div
                                                        key={image.id}
                                                        className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}
                                                    >
                                                       <img
                                                            loading="lazy"
                                                            src={image.img}
                                                            className=""
                                                            style={{ height: '300px', width: '300px', objectFit: 'cover' }}
                                                            alt={`Image ${index + 1}`}
                                                        />
                                                    </div> 
                                                ))}
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselItems"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselItems"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div className="row justify-content-center g-1 mt-1">
                                            {product?.images?.map((image, index) => (
                                                <div className="col-2" key={image.id}>
                                                    <img
                                                        loading="lazy"
                                                        src={image.img}
                                                        type="button"
                                                        data-bs-target="#carouselItems"
                                                        data-bs-slide-to={index}
                                                        className="img-fluid rounded w-100"
                                                        style={{ height: '100px', width: '100px' }}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        onClick={() => handleImageClick(index)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0 shadow p-2 mt-5 bg-body rounded">
                        <div className="card-body">
                            <h1 className="card-title">{product?.name}</h1>
                            <p className="text-body-secondary" style={{ fontSize: '20px' }}>
                                <i className="bi bi-chat-square-text"></i> {product?.description}
                            </p>
                            <hr />
                            <p className="card-text"><strong>Price:</strong> ${product?.price}</p>
                            <p className="card-text"><strong>Discount Price:</strong> ${product?.discountPrice}</p>
                            <p className="card-text"><strong>Brand:</strong> {product?.brand}</p>
                            <p className="card-text"><strong>Category:</strong> {product?.category}</p>
                            <p className="card-text"><strong>Stock Quantity:</strong> {product?.stockQuantity}</p>
                            <p className="card-text"><strong>Rating:</strong> {product?.ratings} / 5 ({product?.reviews} reviews)</p>
                        </div>

                        {/* Video Section
                        {product?.video && (
                            <div className="card-body">
                                <iframe
                                    src={product?.video}
                                    title="Product Video"
                                    style={{ width: '100%', height: '100px' }}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )} */}

                        <div className="d-flex justify-content-between">
                            <div>
                                <strong className='fs-5 ms-3'>Quantity: </strong>
                                <input
                                    type="number"
                                    min="1"
                                    max={product?.stockQuantity}
                                    value={yourQuantity}
                                    onChange={(e) => buypro(e.target.value)}
                                />
                            </div>
                            <div className='fs-3 me-3'>
                                ${yourQuantity > 0 ? (yourQuantity * product?.discountPrice).toFixed(2) : product?.discountPrice.toFixed(2)}
                            </div>
                        </div>

                        <Button onClick={buy} className='w-auto my-1 mx-2' style={{ backgroundColor: "#b0572d", borderColor: "#b0572d" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg> Add to cart
                        </Button>
                    </div>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="mt-4">
                <h5>Customer Reviews</h5>
                <div className="list-group">
                    {product?.comments?.map((comment, index) => (
                        <div className="list-group-item" key={index}>
                            <strong>{comment.userName}</strong>: {comment.commentText}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
