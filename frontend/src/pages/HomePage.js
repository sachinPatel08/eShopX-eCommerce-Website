import React, { useEffect, useState } from "react";
import { Col, Row, TabContent } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage({ match }) {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));

    // AOS Initialization
    Aos.init({
      duration: 1000,
    });
  }, [dispatch, keyword]);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1 className="text-center pt-3" data-aos="fade-up">
            Latest Products
          </h1>
          {products.length === 0 ? <h2>Products not found..</h2> : ""}
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
