export default function Card2() {
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
              src="/Pictures/c.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1>SAR&UX</h1>
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
              src="/Pictures/c1.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1>HERAVALDI BLOOM Rose Water</h1>
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
              src="/Pictures/c2.png"
              alt=""
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-[100px] text-center  ">
            <h1> PINK ROSES WITH SERUM IN MINIMILIST</h1>
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
          New Arrival Serums
        </h1>
        <div class="grid grid-cols-4  w-full py-5 gap-5 mt-0 ">
          <div className="h-[450px] bg-gray-400  overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/c.png" alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400  overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/c1.png" alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400  overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/c2.png" alt="" className="w-[90%]" />
            </div>
          </div>
          <div className="h-[450px] bg-gray-400  overflow-hidden">
            <div className="w-full h-[70%] bg-pink-200 p-5">
              <img src="public/Pictures/c3.png" alt="" className="w-[90%]" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
