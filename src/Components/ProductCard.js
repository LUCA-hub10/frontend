import React from 'react'
import { Button, Card, Badge, ListGroup, Row, Col, Carousel } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteProduct , productDetails} from '../Redux/Actions/ProductActions';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteProduct(props.product._id))
  }

  const {
    name,
    price,
    discountPrice,
    brand,
    model,
    images,
    ratings,
    reviews
  } = props.product;

  // Format discounted price
  const finalPrice = discountPrice ? discountPrice : price;
  const navigate = useNavigate();
const details = async () =>{
  dispatch(productDetails(props.product._id));
navigate("/productPage")
}
  return (
    <div className="product-card">
      <Card className='m-1' style={{ width: '15.4rem', borderRadius: '10px' }}>
        {/* Carousel Section */}
        <Carousel interval={3000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Card.Img variant="top" src={image.img} style={{ borderRadius: '10px 10px 0 0' , height:"250px" , width:"200px" }} />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Product Body Section */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          {/* Product Basic Info */}
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Brand:</strong> {brand}</ListGroup.Item>
            <ListGroup.Item><strong>Model:</strong> {model}</ListGroup.Item>
          </ListGroup>

          {/* Price and Discount */}
          <Row className="my-2">
            <Col>
              <Card.Text>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  ${finalPrice.toFixed(2)}
                </span>
                {discountPrice && (
                  <span style={{ textDecoration: 'line-through', marginLeft: '8px', color: 'gray' }}>
                    ${price.toFixed(2)}
                  </span>
                )}
              </Card.Text>
            </Col>
          </Row>

          {/* Product Description */}
          {/* <Card.Text>
            {description}
          </Card.Text> */}

          {/* Rating and Reviews */}
          <div className="d-flex align-items-center justify-content-between">
            <Badge bg="warning" text="dark" className="mr-2">{ratings} ★</Badge>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" className='me-1' height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>
              <span className='me-2'>{reviews}</span> 
              </span>
          </div>

          {/* Availability Status */}
          <Button variant='success w-100 mt-3' onClick={details}>
            More details
          </Button>

          {/* Action Buttons */}
          <div className="mt-3">
            <Button variant="danger w-100" onClick={handleDelete}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard;
