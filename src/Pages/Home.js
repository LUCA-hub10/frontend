import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/Actions/ProductActions';
import { Card } from 'react-bootstrap';
import ProductsCard from '../Components/ProductsCard';

const Home = () => {
  const dispatch = useDispatch();
  const ListProduct = useSelector(state => state.ProductReducer?.products);
  const search = useSelector(state => state.ProductReducer?.displayPro);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Card className="mx-auto p-3">
        <div className="row">
          <div>
            <div className="d-flex justify-content-between my-1">
              <h2>Products</h2>
            </div>
            <div className="d-flex flex-wrap">
              {search ? 
                ListProduct?.filter((product) =>
                  product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
                || product.brand.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase())
                ).map((product) => (
                  <ProductsCard product={product} key={product.id} />
                )) :
                ListProduct?.map((product) => (
                  <ProductsCard product={product} key={product.id} />
                ))
              }
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
