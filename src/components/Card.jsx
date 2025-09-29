export default function Card() {
  return (
    <>
      <div className="w-full h-full mt-10">
        <h1 className="text-[30px] text-black font-bold flex justify-center">
          New Arrival Serums
        </h1>
      </div>
      <div className="w-[full] h-[full]  flex p-10 justify-center gap-10 ">
        <div className="w-[350px] h-[450px] bg-pink-200 rounded-lg">
          <div className="w-full h-[350px] bg-slate-200 overflow-hidden rounded-lg  ">
            <img
              src="/public/Pictures/cd.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1> Skin Brighton and lightening serum</h1>
            <h2>$19.99</h2>
            <button
              className="border-2  border-pink-300 px-5  rounded-[20px] text-sm text-black 
          hover:bg-pink-800 hover:text-white duration-100"
            >
              By Now
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[450px] bg-pink-200 rounded-lg">
          <div className="w-full h-[350px] bg-slate-200 overflow-hidden rounded-lg">
            <img
              src="/public/Pictures/cd1.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1>Fresh and Radiant</h1>
            <h2>$19.99</h2>
            <button
              className="border-2  border-pink-300 px-5  rounded-[20px] text-sm text-black 
          hover:bg-pink-800 hover:text-white duration-100"
            >
              By Now
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[450px] bg-pink-200 rounded-lg ">
          <div className="w-full h-[350px] bg-slate-200 overflow-hidden rounded-lg">
            <img
              src="/public/Pictures/cd2.png"
              alt=""
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1>R&G vitamin C face Serum</h1>
            <h2>$19.99</h2>
            <button
              className="border-2  border-pink-300 px-5  rounded-[20px] text-sm text-black 
          hover:bg-pink-800 hover:text-white duration-100"
            >
              By Now
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[450px] bg-pink-200 rounded-lg ">
          <div className="w-full h-[350px] bg-slate-200 overflow-hidden rounded-lg">
            <img
              src="/public/Pictures/cd3.png"
              alt=""
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1>R&G Vitamin C Face Serum</h1>
            <h2>$19.99</h2>
            <button
              className="border-2  border-pink-300 px-5  rounded-[20px] text-sm text-black 
          hover:bg-pink-800 hover:text-white duration-100"
            >
              By Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full bg-white mt-10">
        <h1 className="text-[30px] text-black font-bold flex justify-center">
          Most Pupular Products
        </h1>
        <div className="w-full h-full py-5 grid mt-0 grid-cols-4 gap-5">
          <div className="h-[450px] bg-gray-400 rounded-md overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/cd.png" alt="" className="w-[90%] " />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400 rounded-md overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/cd1.png" alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400 rounded-md overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/cd2.png" alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400 rounded-md overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/cd3.png" alt="" className="w-[90%]" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
