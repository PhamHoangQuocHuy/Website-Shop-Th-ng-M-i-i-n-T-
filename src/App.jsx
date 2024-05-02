import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import About from './pages/about'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Login from './pages/login'
import ShopContext from './components/shopcontext'
import Details from './pages/details'
import Signup from './pages/signup'
import ForgotPassword from './pages/forgotpassword'
import Checkout from './pages/checkout'

// seller
import Layout_seller from './components/layout_seller'
import Login_seller from './pages/login_seller'
import Signup_seller from './pages/signup_seller'
import Forgotpassword_seller from './pages/forgotpassword_seller'
import Home_seller from './pages/home_seller'
import Layout_after_login_seller from './components/layout_after_login_seller'
import Order_seller from './pages/order_seller'
import Products_seller from './pages/products_seller'

function App() {
  const isLoggedIn = true;

  return <>
    <ShopContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/details' element={<Details />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
          <Route path='/' element={isLoggedIn ? <Layout_after_login_seller /> : <Layout_seller />}>
            <Route path='/login_seller' element={<Login_seller />}></Route>
            <Route path='/signup_seller' element={<Signup_seller />}></Route>
            <Route path='/forgotpassword_seller' element={<Forgotpassword_seller />}></Route>
            <Route path='/home_seller' element={<Home_seller />}></Route>
            <Route path='/order_seller' element={<Order_seller />}></Route>
            <Route path='/products_seller' element={<Products_seller />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </ShopContext>
  </>
}

export default App
