import React, { useEffect } from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';
import { formatPrice } from '../utils/Helpers';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Product = ({ product }) => {
  // AOS Initialization
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <Card className='my-3 p-3 rounded' data-aos='fade-up'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong
              style={{ color: '#000', fontSize: '18px', fontWeight: '600' }}
            >
              {product.name}
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' style={{ fontSize: '18px', fontWeight: '600' }}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text
          as='h3'
          style={{
            color: '#000',
            fontSize: '20px',
            fontWeight: '600',
            marginTop: '12px',
          }}
        >
          {formatPrice(product.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
