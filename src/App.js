import { Route, Routes } from "react-router-dom";
import './assets/index.scss';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
// import { useGetProductQuery } from "./services/product";



import AdminPage from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Regist from "./pages/Regist";
import Mypage from "./pages/mypage/Mypage";

const App = ({ auth }) => {
  //  const { data, error, isLoading } = useGetProductQuery();

  //  console.log('dta: ', data);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/mypage" element={<Mypage auth={auth}/>} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
    </div>
  );
}

export default App;
