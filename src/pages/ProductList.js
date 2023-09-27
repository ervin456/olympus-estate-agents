import { ProductCard } from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getDisplayName } from "../utils/HelperFunctions";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [productFilterList, setproductFilterList] = useState([]);
  const [maxPriceQueryParam, setMaxPriceQueryParam] = useState();
  const [maxPricePerMonthQueryParam, setMaxPricePerMonthQueryParam] =
    useState();
  const [locationQueryParam, setlocationQueryParam] = useState();
  const [propertyTypeQueryParam, setpropertyTypeQueryParam] = useState();
  const [bedroomsQueryParam, setbedroomsQueryParam] = useState();
  const [typeQueryParam, settypeQueryParam] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:8000/properties", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        let tempFilteredList = [...data];

        if (maxPriceQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.price <= maxPriceQueryParam;
          });
        }

        if (maxPricePerMonthQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.price <= maxPricePerMonthQueryParam;
          });
        }

        if (locationQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.address.town === locationQueryParam;
          });
        }
        if (propertyTypeQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.propertypropertyType === propertyTypeQueryParam;
          });
        }
        if (bedroomsQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.nrOfBedrooms == bedroomsQueryParam;
          });
        }
        if (typeQueryParam) {
          tempFilteredList = tempFilteredList.filter((product, index) => {
            return product.type == typeQueryParam;
          });
        }
        setProductList(tempFilteredList);
        console.log("hey");
      })
      .catch((error) => {
        console.log("Something went wrong(product list)", error);
      });
  }, [
    maxPriceQueryParam,
    maxPricePerMonthQueryParam,
    locationQueryParam,
    propertyTypeQueryParam,
    bedroomsQueryParam,
    typeQueryParam,
  ]);

  useEffect(() => {
    setMaxPriceQueryParam(searchParams.get("maxPrice"));
    setMaxPricePerMonthQueryParam(searchParams.get("maxPricePerMonth"));
    setlocationQueryParam(searchParams.get("location"));
    setpropertyTypeQueryParam(searchParams.get("propertyType"));
    setbedroomsQueryParam(searchParams.get("bedrooms"));
    settypeQueryParam(searchParams.get("type"));
    if (
      searchParams.get("type") === "sale" &&
      searchParams.get("maxPricePerMonth")
    ) {
      searchParams.delete("maxPricePerMonth");
      setSearchParams(searchParams);
    } else if (
      searchParams.get("type") === "rent" &&
      searchParams.get("maxPrice")
    ) {
      searchParams.delete("maxPrice");
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  return (
    <div className="product-list-page">
      <div className="product-list-page-logo">
        <img src="/oea_logo.png" alt="Image not found"></img>
      </div>
      {productList.length !== 0 ? (
        <h3>Properties for Sale</h3>
      ) : (
        <h3>
          No property found. <a href="/search">Go back to search page</a>{" "}
        </h3>
      )}
      <div className="product-card-list-container">
        {productList.length !== 0
          ? productList?.map((product, index) => {
              return (
                <a
                  className="product-card-link-container"
                  href={`/list/${product.id}`}
                >
                  <ProductCard
                    key={`product-card-${product.id}`}
                    imageURL={product?.imageURL}
                    productDisplayName={getDisplayName(
                      product?.nrOfBedrooms,
                      product?.propertyType,
                      product?.type,
                      product?.address?.town,
                      product?.address?.street
                    )}
                    nrOfBedrooms={product?.nrOfBedrooms}
                    nrOfBathrooms={product?.nrOfBathrooms}
                    productDescription={product?.productDescription}
                    price={product?.price}
                  />
                </a>
              );
            })
          : null}
      </div>
    </div>
  );
}
