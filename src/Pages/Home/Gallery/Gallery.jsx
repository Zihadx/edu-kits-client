import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <div className=" mt-12">
      <h1 className="text-5xl font-bold text-center">Gallery: Curious Collectibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {gallery.map((img) => (
          <p key={img.id}> <img className="h-full w-full hover:transform hover:scale-y-110 transition-all duration-200 shadow-md translate-x-3" src={img.image_url} alt="" /> </p>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
