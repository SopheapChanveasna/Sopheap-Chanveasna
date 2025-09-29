import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import AppRoutes from "../routes/AppRoutes"; // keep for later if you add routes
import Content from "../components/Content";
import Card from "../components/Card";
import Info from "../components/Info";
import Info1 from "../components/Info1";
import Card2 from "../components/Card2";
export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <Content/>
      <Card/>
      <Info/>
      <Info1/>
      <Card2/>
      <Footer />
    </>
  );
}
