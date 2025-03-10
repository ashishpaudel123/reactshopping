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
import List from "./List";

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
        if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
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
      <header id="head">
          <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900">
            <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center  p-4">
              <Link to={`/`}>
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={logo} className="h-8" alt="Logo" />
                </a>
              </Link>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <div className="flex gap-7">
                  <Link to="/cart">
                    <span>
                      <FaShoppingCart className="relative text-[30px] text-[#fc394d]" />
                      <span className="absolute top-[9px] right-[60px]  px-2 rounded-full bg-sky-600 text-white text-[12px]">
                        {state.cart.length}
                      </span>
                    </span>
                  </Link>
                  
                  <Link to="/fav">
                    <span>
                    <MdOutlineFavorite className="relative text-[30px] text-[#fc394d] border-[#fc390d]" />
                    <span className="absolute top-2 right-[0px]  px-2 rounded-full bg-sky-600 text-white text-[12px]">
                        {state.favorites.length}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
      </header>
      <List/>

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
