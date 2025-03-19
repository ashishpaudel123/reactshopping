import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function List() {
  let [cat, setCat] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((a) => setCat(a));
  }, []);

  return (
    <>
    <div className="bg-slate-100
                dark:bg-gray-800
                dark:text-white">
      <nav
        className="
                  mx-auto
                  max-w-[1200px]
                flex flex-wrap
                items-center
                justify-between
                my-1

                text-lg text-gray-700
            "
      >
        <div className="md:hidden block px-2">
          <Link className="dark:text-white text-gray-700" to={`/`}>Home</Link>
        </div>
        <RxHamburgerMenu
          onClick={toggleMenu}
          id="menu-button"
          className="h-7 dark:text-white w-7 cursor-pointer px-1 md:hidden block"
        />
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <ul
            className="dark:text-white
                        text-base text-gray-700
                        md:flex
                        md:justify-between 
                        md:pt-0
                        items-center
                        "
          > 
          <Link to={`/`} className="hidden md:block py-2 ps-1 text-nowrap fs12 font-medium border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Home </Link>
            {cat.slice(0, 6).map((a) => (
              <li className="listmobilegap " key={a.slug}>
                <Link to={`/category/${a.slug}`} className="px-4 py-2 text-nowrap fs12 font-medium border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">
                  {a.name}
                </Link>
              </li>
            ))}

            <div className="relative group z-10 listmobilegap">
              <button className="px-4 text-nowrap fs12  font-medium border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                More
              </button>
              <div className="absolute h-[200px] overflow-y-scroll z-10 left-0 hidden bg-white shadow-lg dark:bg-gray-800 group-hover:block group-focus:block">
              {cat.map((a) => (
                <Link key={a.slug} to={`/category/${a.slug}`} className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b text-nowrap border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                {a.name}
                </Link>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
}

export default List;
