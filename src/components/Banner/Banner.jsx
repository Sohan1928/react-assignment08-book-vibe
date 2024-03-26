const Banner = () => {
  return (
    <div className="flex container mx-auto bg-gray-100 rounded-lg items-center justify-around py-10 my-10">
      <div>
        <h1 className="text-5xl font-semibold">
          Books to freshen <br /> up your bookshelf
        </h1>
        <button className="text-xl font-semibold text-white bg-[#23BE0A] px-4 py-2 rounded-lg mt-10">
          View The List
        </button>
      </div>
      <div>
        <img className="" src="banner img.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
