import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  // AOS Initialization
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <h1 className='text-center' data-aos='fade-up'>
        Latest Products
      </h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default HomePage;
