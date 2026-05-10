import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import VendorLayout from './layouts/VendorLayout'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import VendorHome from './pages/vendor/VendorHome'
import VendorOrders from './pages/vendor/VendorOrders'
import VendorMenu from './pages/vendor/VendorMenu'
import VendorSettings from './pages/vendor/VendorSettings'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import SignupCustomer from './pages/auth/SignupCustomer'
import SignupVendor from './pages/auth/SignupVendor'

function App() {
  return (
    <Routes>
      {/* Auth routes — no layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/customer" element={<SignupCustomer />} />
      <Route path="/signup/vendor" element={<SignupVendor />} />

      {/* Customer routes */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* Vendor routes */}
      <Route path="/vendor" element={<VendorLayout />}>
        <Route index element={<VendorHome />} />
        <Route path="vendor-orders" element={<VendorOrders />} />
        <Route path="menu" element={<VendorMenu />} />
        <Route path="settings" element={<VendorSettings />} />
      </Route>
    </Routes>
  )
}

export default App
