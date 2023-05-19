const About = () => {
  return (
    <div className="md:flex justify-between items-center bg-[#f06d4f] p-4 md:p-12 mt-12 rounded-lg shadow">
      <div className="flex-col lg:flex-row-reverse space-y-6 md:ml-16">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-100">
          Education <br /> through play!
        </h1>
        <p className="font-semibold text-gray-100">
          An online destination for quality products of every kind for the
          little <br /> ones in your life; plus, inspiration and intel that will
          make your shopping <br /> experience as easy as one, two, hooray!
        </p>
        <label className="btn btn-accent text-white">About us</label>
      </div>
      <div>
        <img
          className="h-[600px] flex justify-end rounded-2xl md:rounded-bl-full mt-4"
          src="https://i.ibb.co/QHpqXf1/joshua-fernandez-W7-BMYXF9bo0-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
