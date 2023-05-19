import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <div className=" mt-8">
      <h1 className="text-5xl font-bold text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {gallery.map((img) => (
          <p key={img.id}> <img className="h-full w-full" src={img.image_url} alt="" /> </p>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
