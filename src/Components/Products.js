import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import AddProduct from './AddProduct';
import { getProductsByClientId } from '../Redux/Actions/ProductActions';

const PProducts = () => {
  const dispatch = useDispatch();
  const client = useSelector(state =>  state.ClientReducers.client?.client);
  const ListProduct = useSelector(state => state.ProductReducer?.myProducts);
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(getProductsByClientId(client._id));
  }, [dispatch]);

  return (
    <div>
      {!show && (
        <Card className="mx-auto p-3">
          <div className="row">
            <div>
              <div className="d-flex justify-content-between my-1">
                <h2>My Products</h2>
                <Button  style={{backgroundColor:"#b99575" , borderColor:"#b99575"}}
                onClick={() => setShow(true)}>
                  Add new Product
                </Button>
              </div>
              <div className="d-flex flex-wrap">
                {ListProduct?.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      {show && (
        <AddProduct setShow={setShow} />
      )}
    </div>
  );
};

export default PProducts;
