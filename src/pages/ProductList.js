import { ProductCard } from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { PRODUCT_DATA } from "../utils/productMockedData";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(PRODUCT_DATA);
  }, []);

  return (
    <div className="product-list-page">
      <div className="product-list-page-logo">
        <img src="/oea_logo.png" alt="Image not found"></img>
      </div>
      <h3>Properties for Sale</h3>
      <div className="product-card-list-container">
        {productList?.map((product, index) => {
          return (
            <ProductCard
              key={`product-card-${product.id}`}
              imageURL={product?.imageURL}
              productDisplayName={product?.productDisplayName}
              nrOfBedrooms={product?.nrOfBedrooms}
              nrOfBathrooms={product?.nrOfBathrooms}
              productDescription={product?.productDescription}
              price={product?.price}
            />
          );
        })}
      </div>
    </div>
  );
}
