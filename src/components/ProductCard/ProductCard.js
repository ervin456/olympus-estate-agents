import { DESCRIPTION_CHARACTER_LIMIT } from "../../utils/constants";
import { cutFirstNCharacter } from "../../utils/HelperFunctions";
export function ProductCard({
  imageURL,
  productDisplayName,
  nrOfBedrooms,
  nrOfBathrooms,
  productDescription,
  price,
}) {
  return (
    <div className="product-card-container">
      <img
        className="product-card-image"
        src={`${imageURL}`}
        alt="Image not found"
      ></img>
      <div className="product-card-display-name">{productDisplayName}</div>
      <div className="product-icon-container">
        <div>
          <img
            className="product-room-icons-bedroom"
            src="icons8-bed-50.png"
            alt="Image not found"
          ></img>{" "}
          <span className="product-number-of-rooms">{nrOfBedrooms}</span>
        </div>
        <div>
          <img
            className="product-room-icon-bathroom"
            src="icons8-bathroom-50.png"
            alt="Image not found"
          ></img>
          {""}
          <span className="product-number-of-rooms">{nrOfBathrooms}</span>
        </div>
      </div>
      <div className="product-card-descripton">
        {cutFirstNCharacter(productDescription, DESCRIPTION_CHARACTER_LIMIT)}
      </div>
      <button className="product-card-price-button">{price}</button>
    </div>
  );
}
