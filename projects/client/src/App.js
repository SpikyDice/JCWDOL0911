import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import LayoutWithNavbar from "./components/LayoutWithNavbar";
import AuthRoute from "./components/AuthRoute";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import { useEffect } from "react";

//put imported pages here!
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Verification from "./pages/Verification";
import Login from "./pages/Login";
import Address from "./pages/Address";
import Order from "./pages/Order";
import ChangePassword from "./pages/ChangePassword";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import AnswerQuestion from "./pages/admin/AnswerQuestion";
import AuthRouteAdmin from "./components/admin/AuthRouteAdmin";
import PrivateRouteAdmin from "./components/admin/PrivateRouteAdmin";
import DetailUserQuestion from "./pages/admin/DetailUserQuestion";

//
function App() {
  //for token check
  // useEffect(() => console.log("Running First"));
  // const userProfile = {
  //   name: "Rifqi",
  //   email: "rifqirafialdy@gmail.com",
  //   id: 1,
  // };
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(userProfile));
  // });

  return (
    <div className="">
      <Routes>
        <Route element={<LayoutWithNavbar />}>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/address" element={<Address />} />
            <Route path="/order" element={<Order />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verification/:token" element={<Verification />} />
          <Route path="/reset-password/:token" element={<ChangePassword />} />
        </Route>
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/answer-question" element={<AnswerQuestion />} />
          <Route
            path="/admin/answer-question/:idquestion"
            element={<DetailUserQuestion />}
          />
        </Route>
        <Route element={<AuthRouteAdmin />}>
          <Route path="/admin/login" element={<LoginAdmin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
