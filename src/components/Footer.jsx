export default function Footer() {
  return (
    <footer className="bg-pink-400 bottom-0  text-black py-6 px-5 w-full md:px-20  ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">PinkShop</h2>
          <p className="mt-1 text-black text-sm">
            Find your favorite here!!! The Quality and Good Price
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-pink-500">
              TikTok
            </a>
            <a href="#" className="hover:text-pink-500">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-500">
              Instagram
            </a>
            <a href="#" className="hover:text-pink-500">
              Telegram
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h3 className="font-semibold mb-1">Contact</h3>
          <p>+855 66356596 | +855 95221316</p>
          <p className="mt-2 text-gray-400 text-xs"></p>
        </div>
      </div>
    </footer>
  );
}
