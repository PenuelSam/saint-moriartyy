import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Permanents from "./pages/Permanents"
import Lookbook from "./pages/Lookbook"
import About from "./pages/About"
import Sustainability from "./pages/Sustainability"
import ShopDetail from "./pages/ShopDetail"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/permanents" element={<Permanents />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/product/:id" element={<ShopDetail />} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <div className="w-[100vw] h-[0.6px] bg-white"></div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App