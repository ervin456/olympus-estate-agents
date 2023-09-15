import { ProductCard } from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
export default function List() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList([
      {
        imageURL:
          "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
        productDisplayName:
          "5 bed detached house for sale in Netherfield Farm Close, Sheffield",
        nrOfBedrooms: 5,
        nrOfBathrooms: 3,
        productDescription:
          "he bathroom has a bath, a toilet and a washbasin, but it doesn’t have a shower.There’s a microwave, a washing machine and a fridge-freezer, but there isn’t a dishwasher.",
        price: 800000,
      },
      {
        imageURL:
          "https://w0.peakpx.com/wallpaper/480/818/HD-wallpaper-man-made-resort-tropical-ocean.jpg?fbclid=IwAR2vbaFCXlme2mq_7eTD9VdduleI9_DKcaO3-vLkuimo42GlUDxovCzMAF8",
        productDisplayName:
          "Some of the most perfectly minimal yet beautifully creative uses of space can be found in our collection of modern house plans. ",
        nrOfBedrooms: 8,
        nrOfBathrooms: 10,
        productDescription:
          "While each modern floor plan brings something unique to the table, they all emphasize clean lines, geometric shapes, open floor plans, and an aesthetically pleasing design flow in both interior and exterior spaces.",
        price: 1000000,
      },
    ]);
  }, []);

  return (
    <div className="list-page">
      <h3>Properties for Sale</h3>
      <div className="product-card-list-container">
        {productList.map((product, index) => {
          return (
            <ProductCard
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
