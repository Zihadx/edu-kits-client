const About = () => {
  return (
    <div className="md:flex justify-between items-center bg-[#f06d4f] p-4 md:p-24 mt-12 h-[490px]">
      <div className="flex-col lg:flex-row-reverse space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-100">
          Education <br /> through play!
        </h1>
        <p className="font-semibold text-gray-100">
          An online destination for quality products of every kind for the
          little <br /> ones in your life; plus, inspiration and intel that will
          make your shopping <br /> experience as easy as one, two, hooray!
        </p>
        <button className="bg-[#37cdbe] px-4 py-2 mt-10 text-white rounded-sm">About us</button>
      </div>
      <div>
        <img
          className="h-[400px] flex justify-end rounded-2xl md:rounded-bl-full mt-4"
          src="https://i.ibb.co/QHpqXf1/joshua-fernandez-W7-BMYXF9bo0-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
