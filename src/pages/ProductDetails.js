import { useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../utils/productMockedData";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const temp = PRODUCT_DATA.find((currentProduct, list) => {
      return currentProduct.id === id;
    });
    setProduct(temp);
  }, []);
  console.log("product= ", product);
  return (
    <div className="product-details-page">
      <div className="product-details-logo">
        <img src="/oea_logo.png" alt="Image not found"></img>
      </div>
      <div className="product-image-display-name-combiner">
        <div className="product-details-house-image">
          <img src={product.imageURL} alt="Image not found "></img>
        </div>
        <div className="product-details-display-name">
          {product.productDisplayName}
        </div>
      </div>
      <div className="product-price-rooms-combine">
        <div className="product-details-price">£{product.price}</div>
        <img
          className="product-details-room-icon-bedroom"
          src="/icons8-bed-50.png"
          alt="Image not found"
        ></img>{" "}
        <span className="product-details-number-of-rooms">
          {product.nrOfBedrooms}
        </span>
        <img
          className="product-details-room-icon-bathroom"
          src="/icons8-bathroom-50.png"
          alt="Image not found"
        ></img>{" "}
        <span className="product-details-number-of-rooms">
          {product.nrOfBathrooms}
        </span>
      </div>
      <div className="product-details-long-descpirption">
        {product.productDescription}
      </div>
    </div>
  );
}
