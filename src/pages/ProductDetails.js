import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductPhotoAlbum from "../components/ProductPhotoAlbum/ProductPhotoAlbum";
import { getDisplayName } from "../utils/HelperFunctions";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/properties/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log("Something went wrong(product details)", error);
      });
  }, []);

  return (
    <div className="product-details-page">
      <div className="product-details-header-container">
        <a href="javascript:history.back()">
          <img
            src="/chevron-left-solid.svg"
            className="symbol-to-navigate-back"
          ></img>
        </a>
        <div className="product-details-logo">
          <img src="/oea_logo.png" alt="Image not found"></img>
        </div>
      </div>
      <div className="product-image-display-name-combiner">
        <div className="product-details-house-image">
          <img src={product.imageURL} alt="Image not found "></img>
        </div>
        <div className="product-details-display-name">
          {getDisplayName(
            product?.nrOfBedrooms,
            product?.propertyType,
            product?.type,
            product?.address?.town,
            product?.address?.street
          )}
        </div>
      </div>
      <div className="product-details-element-bar">
        <a href="#Images" img class="fa fa-image">
          <span className="product-details-element-bar-item-text">Images</span>
        </a>
        <a href="#Map" img class="fa fa-map">
          <span className="product-details-element-bar-item-text">Map</span>
        </a>

        <a href="#EPC" img class="fa fa-bar-chart">
          <span className="product-details-element-bar-item-text">EPC</span>
        </a>

        <a href="#Brochure" img class="fa fa-file-pdf-o">
          <span className="product-details-element-bar-item-text">
            Brochure
          </span>
        </a>
      </div>
      <div className="product-price-rooms-combine">
        <div className="product-details-price">£{product.price}</div>
        <div className="prduct-details-rooms-numbers-combine">
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
      </div>
      <div className="product-details-long-descpirption">
        {product.productDescription}
      </div>
      <section id="Images"></section>
      <h3 className="product-details-image-title">Property Images</h3>
      <ProductPhotoAlbum photos={product.images} />
      <section id="Map"></section>
      <h3 className="product-details-image-title">Map</h3>

      <div class="gmap_canvas">
        <iframe
          class="product-details-map-location"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <section id="EPC"></section>
      <h3 className="product-details-image-title">EPC</h3>
      <div className="product-details-epc">
        <img src={product.EPC}></img>
      </div>
      <section id="Brochure"></section>
      <h3 className="product-details-image-title">Brochure</h3>
      <button class="product-details-brochure-button">
        <i class="fa fa-download"></i> Download Brochure
      </button>
    </div>
  );
}
