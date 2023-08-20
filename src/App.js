import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./app/home/Home";
import Products from "./app/products/Products";
import Cloud from "./app/cloud/Cloud";
import Advertisers from "./app/advertisers/Advertisers";
import Publishers from "./app/advertisers/Advertisers";
import Creativegallery from "./app/creativegallery/Creativegallery";
import Blog from "./app/blog/Blog";
import Tv from "./app/tv/Tv";
import Casestudies from "./app/casestudies/Casestudies";
import Retails from "./app/retails/Retails";
import About from "./app/about/about";
import Culture from "./app/culture/Culture";
import Sustainability from "./app/sustainability/Sustainability";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Forgetpassword from "./app/forgetpassword/Forgetpassword";
import Pagenotfound from "./app/Pagenotfound/Pagenotfound";
import Footer from "./components/Footer/Footer";
import { useGlobalContext } from "./Context";
function App() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="app">
      <Header />
      <main onMouseOver={closeSubmenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/creative-gallery" element={<Creativegallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/case-studies" element={<Casestudies />} />
          <Route path="/retails" element={<Retails />} />
          <Route path="/about" element={<About />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Forget-password" element={<Forgetpassword />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
