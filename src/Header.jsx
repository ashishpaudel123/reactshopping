import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import CartContext from "./CartContext";
import Category from "./Category";
import Details from "./Details";
import logo from "./logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import Fav from "./Fav";

function Header() {
  let { state, dispatch } = useContext(CartContext);
  let [cat, setCat] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((a) => setCat(a));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("head");
      const nav= document.querySelector('nav');
      if (header) {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          header.style.position = "fixed";
          header.style.top = "0px";
          header.style.width = "100%";
          nav.style.filter = "brightness(100%)";
          nav.style.opacity = "95%";
          header.style.zIndex = "100";
        } else {
          header.style.top = "0px";
          header.style.position = "relative";

        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
        
      {/* <header className='bg-red-700 py-5 text-white'>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <h2 className='font-bold text-center'><Link to={'/'}>SHOP</Link></h2>
                <div className='flex gap-5'>
                <Link to='/cart'><FaShoppingCart className='text-[30px]' /> <span className='absolute top-0 right-[18px]  px-2 rounded-full bg-sky-600 text-white rounded'>{state.cart.length}</span></Link>
                <Link to='/favourite'><MdOutlineFavorite className='text-[30px]' /> </Link>
                </div>

            </div>
        </header> */}
      {/* <nav className='bg-blue-700 py-5 text-white'>
        <div className="max-w-[1200px] mx-auto">
            <ul className='flex gap-5 items-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
        </nav> */}
      <header id="head">
          <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900">
            <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center  p-4">
              <Link to={`/`}>
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={logo} className="h-8" alt="Logo" />
                </a>
              </Link>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <div className="flex gap-10">
                  <Link to="/cart">
                    <span className="relative">
                      <FaShoppingCart className="text-[30px] text-[#fc394d]" />{" "}
                      <span className="absolute top-[-10px] right-[-15px]  px-2 rounded-full bg-sky-600 text-white text-[12px]">
                        {state.cart.length}
                      </span>
                    </span>
                  </Link>
                  
                  <Link to="/fav">
                    <span className="relative">
                    <MdOutlineFavorite className="text-[30px] text-[#fc394d] border-[#fc390d]" />{" "}
                    <span className="absolute top-[-10px] right-[-15px]  px-2 rounded-full bg-sky-600 text-white text-[12px]">
                        {state.favorites.length}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          {/* <nav className="dark:bg-gray-700 bg-slate-100">
            <div className="max-w-[1200px] mx-auto px-3 ps-0 py-1">
              <div className="flex items-center">
                <ul className="flex flex-row overflow-hidden font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <Link to={`/`}>
                    <a
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                      Home
                    </a>
                  </Link>
                  {cat.slice(0, 8).map((a) => (
                    <Link to={`/category/${a.slug}`} key={a.slug}>
                      <a
                        type="button"
                        className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:focus:ring-gray-500  dark:focus:text-white"
                      >
                        {a.name}
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </nav> */}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/category/:cid/" element={<Category />} />
        <Route path="/details/:id/" element={<Details />} />
        <Route path="category/:cid/details/:id/" element={<Details />} />
      </Routes>
    </div>
  );
}

export default Header;
