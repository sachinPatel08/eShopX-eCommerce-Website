import React, { useEffect, useState } from "react";
import { Col, Row, TabContent } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());

    // AOS Initialization
    Aos.init({
      duration: 1000,
    });
  }, [dispatch]);

  return (
    <>
      
      {loading ? (
        
        <Loader/>
      
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <h1 className="text-center" data-aos="fade-up">
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
      )}
    </>
  );
}

export default HomePage;
