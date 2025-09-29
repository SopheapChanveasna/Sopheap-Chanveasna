export default function Navbar() {
  return (
    <>
      <nav className="hidden w-full h-[70px] bg-white lg:flex shadow-md">
        <div className="w-[30%] h-[full]:">
          <img
            src="/Pictures/logo1.jpg"
            alt=""
            className="h-full object-cover"
          />
        </div>
        {/* Desktop menu */}
        <div className="w-[70%] h-full flex justify-end items-center">
          <div className="w-[30%] h-full  flex items-center">
            <input
              type="text"
              className="border-2 border-black w-full px-3 py-1 rounded-[20px]"
              placeholder="🔍︎search product"
            />
          </div>

          <ul className="w-[60%] flex justify-evenly font-bold text-xl">
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              Home
            </li>
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              Shop
            </li>
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              About Us
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="lg:hidden w-full h-[60px] flex  ">
        <div className="w-[50%] h-full">
          <img
            src="/public/Pictures/logo.png"
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="w-[50%] h-full flex items-center justify-end px-5">
          <div className="w-[100%] h-full  flex items-center">
            <input
              type="text"
              className="border-2 border-black w-full px-3 py-1 rounded-[20px]"
              placeholder="🔍︎search..."
            />
          </div>
          <h1 className="text-3xl" onClick={() => setmenu(!menu)}>
            {menu ? <MdOutlineMenu /> : <MdOutlineClose />}
          </h1>
        </div>
        
        <div
          className={` w-[50%] h-[100vh] bg-pink-200 shadow-md fixed top-0 left-0 transition-all duration-200 z-50 ${
            menu ? `-translate-x-full` : `translate-x-0`
          }`}
        >
          <ul className="w-full font-medium text-xl pl-4 pt-5 space-y-4">
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              Home
            </li>
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              Shop
            </li>
            <li className="cursor-pointer hover:text-pink-500 duration-100">
              About US
            </li>
          </ul>
        </div>
       
        <div
          className={`w-[50%] h-[100vh]  fixed top-0 z-50 right-0 ${
            menu ? "translate-x-full" : "-translate-x-0"
          }`}
          onClick={() => setmenu(!menu)}
        ></div>
      </div> */}
    </>
  );
}
