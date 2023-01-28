import React from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';
import { formatPrice } from '../utils/Helpers';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong
              style={{ color: '#000', fontSize: '18px', fontWeight: '600' }}
            >
              {product.name}
            </strong>
          </Card.Title>
        </a>

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
