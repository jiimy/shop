import { Route, Routes } from "react-router-dom";
import "./assets/index.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import AdminPage from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Regist from "./pages/Regist";
import Mypage from "./pages/mypage/Mypage";
import CategoryPage from "./pages/category/CategoryPage";
import BrandPage from "./pages/brand/BrandPage";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import { useGetProductQuery } from "./services/product";

const App = ({ auth }) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/shop" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/mypage" element={<Mypage auth={auth} />} />
        <Route path="/regist" element={<Regist />} />
        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
