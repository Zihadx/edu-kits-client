const Discount = () => {
  return (
    <div className="mt-12">
      <div
        className="hero h-[640px] rounded-lg"
        style={{
          backgroundImage: `url("https://i.ibb.co/GpjWhrk/katie-emslie-B2-qpg-Jm9-Y-unsplash.jpg")`,
        }}
      >
        <div className="hero-overlay rounded-lg bg-[#e9a090] bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" text-black">
            <h1 className="mb-5 text-5xl font-bold">
              15% Discount <br /> On All Kids Education Toys
            </h1>
            <p className="mb-5">Offer Expires on</p>

            <div className="grid grid-flow-col gap-5 text-center ">
              <div className="flex flex-col p-2 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 94 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-[#eb4d2a] rounded-md text-neutral-content  justify-center items-center">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-[#eb4d2a] rounded-md text-neutral-content  justify-center items-center">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-[#eb4d2a] rounded-md text-neutral-content justify-center items-center">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 54 }}></span>
                </span>
                sec
              </div>
            </div>

            <button className="btn btn-accent text-white mt-8">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
