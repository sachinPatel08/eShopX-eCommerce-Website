import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button, Image } from 'react-bootstrap';
import { formatPrice } from '../utils/Helpers';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // MAKE A REQUEST TO BACKEND
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();

    // AOS Initialization
    Aos.init({
      duration: 1000,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link
        className='btn btn-dark my-3'
        to='/'
        style={{ fontSize: '18px', fontWeight: '600' }}
      >
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            data-aos='fade-right'
          />
        </Col>
        <Col md={3} data-aos='fade-left'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item style={{ marginTop: '10px' }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                color: '#000',
                fontSize: '22px',
                fontWeight: '600',
                marginTop: '10px',
              }}
            >
              {formatPrice(product.price)}
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: 'justify', marginTop: '10px' }}>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} data-aos='fade-left'>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col
                    style={{
                      color: '#000',
                      fontSize: '18px',
                      fontWeight: '600',
                    }}
                  >
                    Price
                  </Col>
                  <Col>
                    <strong
                      style={{
                        color: '#000',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      {formatPrice(product.price)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col
                    style={{
                      color: '#000',
                      fontSize: '18px',
                      fontWeight: '600',
                    }}
                  >
                    Status
                  </Col>
                  <Col>
                    <strong
                      style={{
                        color: `${
                          product.countInStock > 0 ? '#32CD32' : '#FF5733'
                        }`,
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='w-100'
                  type='button'
                  style={{ fontSize: '18px', fontWeight: '600' }}
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
