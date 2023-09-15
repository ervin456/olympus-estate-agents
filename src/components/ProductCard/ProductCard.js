export function ProductCard({
  imageURL,
  productDisplayName,
  nrOfBedrooms,
  nrOfBathrooms,
  productDescription,
  price,
}) {
  return (
    <div className="card-container">
      <img className="card-image" src={`${imageURL}`} alt=""></img>
      <div className="card-display-name">{productDisplayName}</div>
      <div className="icon-container">
        <div>
          <img
            className="room-icons-bedroom"
            src="icons8-bed-50.png"
            alt=""
          ></img>{" "}
          <span className="number-of-rooms">{nrOfBedrooms}</span>
        </div>
        <div>
          <img
            className="room-icon-bathroom"
            src="icons8-bathroom-50.png"
            alt=""
          ></img>{" "}
          <span className="number-of-rooms">{nrOfBathrooms}</span>
        </div>
      </div>
      <div className="card-descripton">{productDescription}</div>
      <button className="card-price-button">{price}</button>
    </div>
  );
}
