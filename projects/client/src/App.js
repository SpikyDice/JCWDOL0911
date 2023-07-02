import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import LayoutWithNavbar from "./components/LayoutWithNavbar";
import AuthRoute from "./components/AuthRoute";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import OrderList from "./pages/OrderList";

//put imported pages here!

import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import DetailProduct from "./pages/DetailProduct";
import Verification from "./pages/Verification";
import Login from "./pages/Login";
// import Address from "./pages/Address";
import Order from "./pages/Order";
import ChangePassword from "./pages/ChangePassword";
import PageNotFound from "./pages/PageNotFound";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/users/userSlice";
import Products from "./pages/admin/Products";
import PrivateRoute from "./components/PrivateRoute";
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import AnswerQuestion from "./pages/admin/AnswerQuestion";
import AuthRouteAdmin from "./components/admin/AuthRouteAdmin";
import PrivateRouteAdmin from "./components/admin/PrivateRouteAdmin";
import DetailUserQuestion from "./pages/admin/DetailUserQuestion";
import UserTransacations from "./pages/UserTransacations";
import UserRoute from "./components/UserRoute";
import AdminRoute from "./components/admin/AdminRoute";
// import DetailProduct from "./pages/admin/DetailProduct";
import UnitConversion from "./pages/admin/UnitConversion";
import Transaction from "./pages/admin/Transaction";

//
function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<UserRoute />}>
          <Route element={<LayoutWithNavbar />}>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/detail/:productId" element={<DetailProduct />} />
            <Route path="/" element={<LandingPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/order" element={<Order />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/my-transactions" element={<UserTransacations />} />
            </Route>
          </Route>
          <Route element={<AuthRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verification/:token" element={<Verification />} />
            <Route path="/reset-password/:token" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route element={<PrivateRouteAdmin />}>
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/answer-question" element={<AnswerQuestion />} />
            <Route path="/admin/products" element={<Products />} />
            <Route
              path="/admin/products/unit-conversion"
              element={<UnitConversion />}
            />
            <Route
              path="/admin/answer-question/:idquestion"
              element={<DetailUserQuestion />}
            />
            <Route path="/admin/transactions" element={<Transaction />} />
          </Route>
          <Route path="/admin/products" element={<Products />} />
          <Route
            path="/admin/products/:idproduct"
            element={<DetailProduct />}
          />
          <Route element={<AuthRouteAdmin />}>
            <Route path="/admin/login" element={<LoginAdmin />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
