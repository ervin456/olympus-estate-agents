import { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";

export default function ProductPhotoAlbum({ photos }) {
  const [convertedPhotoData, setconvertedPhotoData] = useState([]);
  useEffect(() => {
    const tempPhotoData = photos?.map((currentPhotoURL, index) => {
      return {
        src: currentPhotoURL,
        width: 800,
        height: 600,
      };
    });
    setconvertedPhotoData(tempPhotoData);
  }, [photos]);

  return (
    <div className="details-page-photo-album">
      <PhotoAlbum layout="rows" photos={convertedPhotoData} />;
    </div>
  );
}
