import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/common";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import GroceryDashboard from "./components/customers/GroceryDashboard";
import Cart from "./components/customers/Cart";
import CustomerLayout from "./components/customers/CustomerLayout";
import AdminLayout from "./components/admin/AdminLayout";
import Orders from "./components/admin/Orders"; // Admin Orders Page
import AdminDashboard from "./components/admin/adminDashboard";
import AddProduct from "./components/admin/AddProduct";
import ManageProducts from "./components/admin/ManageProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route - Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<GroceryDashboard />} /> {/* Default */}
          <Route path="/customer/cart" element={<Cart />} /> {/* Cart Page */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} /> {/* Default Admin Page */}
          <Route path="orders" element={<Orders />} /> {/* Orders Page */}
          <Route path="/admin/add-product" element={<AddProduct/>}/>
          <Route path="/admin/products" element={<ManageProducts/>}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
