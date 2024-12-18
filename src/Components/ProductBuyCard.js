import React from 'react'
import { Button, Card, Row, Col, Carousel } from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import { disproductBuy } from '../Redux/Actions/ProductActions';

function ProductBuyCard(props) {
    const dispatch = useDispatch()
    const {
      name,
      price,
      discountPrice,
      brand,
      model,
      images
    } = props?.product.product;
  
    const finalPrice = discountPrice ? discountPrice : price;
    const dispro = async () =>{
      dispatch(disproductBuy(props.product.product));
    }
    return (
      <div className="product-card mb-2">
        {
            props.product?
            <Card className='m-1 p-1' style={{ width: '23rem', borderRadius: '10px' , height:"auto"}}>
          <div className='row'>
          <div className='col-6'>
          <Carousel interval={3000}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <Card.Img variant="top" src={image.img} style={{ borderRadius: '10px 10px 0 0' , height:"150px" , width:"150px" }} />
              </Carousel.Item>
            ))}
          </Carousel>
          </div>
          <div className='col-6'>
            <div className='fs-5 bold'>{name}</div>
            <div><strong>Brand:</strong> {brand}</div>
            <div><strong>Model:</strong> {model}</div>
          <Row className="my-2">
              <Col>                   
                <Card.Text>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    ${finalPrice.toFixed(2)} * {props.product.yourQuantity}
                  </span>
                </Card.Text>
              </Col>
          </Row>
            <Button  style={{backgroundColor:"#b47651" , borderColor:"#b47651"}} className='w-75 mt-3 mb-1' onClick={dispro}>
              Delete
            </Button>
          </div>
          </div>
        </Card>
        :null
        }
      </div>
    )
  }

export default ProductBuyCard
