export default function Content() {
  return (
    <>
      <div className=" w-full h-[400px] bg-pink-200 rounded-md flex">
        <div className="w-[50%] h-full py-10 pl-10">
          <h1 className="text-[60px] font-bold text-black">
            Grap Up to <span className="text-red-700 animate-pulse">50%</span>{" "}
            off on Selected your Product.
          </h1>
          <button
            className="border-2 mt-5 border-pink-800 px-5 py-2 rounded-[25px] text-xl font-bold text-black 
          hover:bg-pink-800 hover:text-white duration-100"
          >
            By Now
          </button>
        </div>
        <div className="w-[50%] h-full overflow-hidden">
          <img
            src="/Pictures/banner22.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
