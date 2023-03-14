import React, { useState, useEffect } from "react";

import { fetchProductDetail } from "../../utils/api";

import "./ProductDetail.css";

const ProductDetail = ({ productId }) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!productId) return;
    const getProductInfo = async () => {
      try {
        const fetchedProductInfo = await fetchProductDetail(productId);
        setProductInfo(fetchedProductInfo)
      } catch (error) {
        console.error(`There was an error fetching the product info. Error: ${error}`);
      }
    }
    getProductInfo()
  }, [productId]);

  const renderProductInfo = () => {
    return (
      <div className="detail-container">
        <div className="row">
          <img src={productInfo.image} className="product-image" alt="product" data-cy="img"/>
        </div>
        <div className="row">
          <div className="row-title">Name:</div>
          <div className="row-body">{productInfo.title}</div>
        </div>
        <div className="row">
          <div className="row-title">Description:</div>
          <div className="row-body">{productInfo.description}</div>
        </div>
        <div className="row">
          <div className="row-title">Price:</div>
          <div className="row-body">{`£${productInfo.price.toFixed(2)}`}</div>
        </div>
      </div>
    );
  };

  return productInfo && renderProductInfo();
}

export default ProductDetail;
