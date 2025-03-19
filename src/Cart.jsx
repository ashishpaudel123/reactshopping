import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "./CartContext";

function Cart() {
    let{state,dispatch}=useContext(CartContext)
  return (
    <>
    <section className="bg-white antialiased dark:bg-gray-900 md:py-4">
                  <div className="max-w-[1200px] mx-auto 2xl:px-0">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mx-2 py-2">Shopping Cart</h2>
                  {state.cart.map((a)=>(
                  <div key={a.id} className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                      <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                              <img className="h-20 w-20" src={a.thumbnail} alt="imac image" />
                            <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                              <div className="flex items-center">
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                  </svg>
                                </button>
                                <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder defaultValue={2} required />
                                <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                  </svg>
                                </button>
                              </div>
                              <div className="text-end md:order-4 md:w-32">
                                <p className="text-base font-bold text-gray-900 dark:text-white">${a.price}</p>
                              </div>
                            </div>
                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                              <p className="text-base font-medium text-gray-900  dark:text-white">{a.title}</p>
                              <div className="flex items-center gap-4">
                                <button onClick={()=>dispatch({type: 'remove', payload : a})} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                  <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        ))}
            </div>
    </section>



{/* you also like  start*/}
<Trending/>
{/* you also like  end*/}
 
    </>
  )
}

export default Cart


function Trending() {
  let { state, dispatch } = useContext(CartContext);
  let [beauty, setBeauty] = useState([]);
  let [laptops, setLaptops] = useState([]);
  let [smartphones, setSmartphones] = useState([]);
  let [top, setTop] = useState([]);
  let [groceries, setGroceries] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/beauty`)
      .then((res) => res.json())
      .then((a) => setBeauty(a.products));

    fetch(`https://dummyjson.com/products/category/fragrances`)
      .then((res) => res.json())
      .then((a) => setLaptops(a.products));

    fetch(`https://dummyjson.com/products/category/laptops`)
      .then((res) => res.json())
      .then((a) => setSmartphones(a.products));

    fetch(`https://dummyjson.com/products/category/tops`)
      .then((res) => res.json())
      .then((a) => setTop(a.products));

    fetch(`https://dummyjson.com/products/category/tops`)
      .then((res) => res.json())
      .then((a) => setTop(a.products));

    fetch(`https://dummyjson.com/products/category/groceries`)
      .then((res) => res.json())
      .then((a) => setGroceries(a.products));
  }, []);
    // if (!beauty && !laptops && !smartphones) {
    //   return (
    //     <div>
    //       <section className="dots-container">
    //         <div className="dot" />
    //         <div className="dot" />
    //         <div className="dot" />
    //         <div className="dot" />
    //         <div className="dot" />
    //       </section>
    //     </div>
    //   );
    // }

  return (
    <>
      <section className="max-w-[1200px] mx-auto">
        <h2 className="uppercase font-bold m-2">Today Most selling Products</h2>
        <div className="flex flex-wrap justify-evenly jc mt-2 gap-2">
          {beauty.slice(0, 1).map((a) => (
            <div className="bg-slate-100" key={a.id}>
              <div className="shadow-lg wmd w-[220px] border p-4 dark:bg-gray-900">
                <div className="flex overflow-hidden justify-center">
                  <Link className="overflow-hidden" to={`details/${a.id}`}>
                    <img
                      className="w-[150px] hover:scale-[1.2] transition duration-500"
                      src={a.thumbnail}
                      alt="img"
                    />
                  </Link>
                </div>
                <Link to={`details/${a.id}`}>
                  <p className="font-bold l1 hover:underline hover:text-blue-700 my-1 dark:text-white">
                    {a.title}
                  </p>
                </Link>
                <div className="flex jb justify-between">
                  <p className="font-bold py-4 fs12 text-orange-500">
                    ${a.price}
                  </p>
                  <p className="font-bold fs12 py-4 text-blue-500">
                    {a.discountPercentage}% OFF
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="cartbutton"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="fs15">Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>${a.price}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {laptops.slice(0, 1).map((a) => (
            <div className="bg-slate-100" key={a.id}>
              <div className="shadow-lg wmd w-[220px] border p-4 dark:bg-gray-900">
                  <Link className="flex overflow-hidden justify-center" to={`details/${a.id}`}>
                    <img
                      className="w-[150px] hover:scale-[1.2] transition duration-500"
                      src={a.thumbnail}
                      alt="img"
                    />
                  </Link>
                <Link to={`details/${a.id}`}>
                  <p className="font-bold l1 hover:underline hover:text-blue-700 my-1 dark:text-white">
                    {a.title}
                  </p>
                </Link>
                <div className="flex jb justify-between">
                  <p className="font-bold  py-4 fs12 text-orange-500">
                    ${a.price}
                  </p>
                  <p className="font-bold fs12 py-4 text-blue-500">
                    {a.discountPercentage}% OFF
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="cartbutton"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="fs15">Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>${a.price}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {smartphones.slice(0, 1).map((a) => (
            <div className="bg-slate-100" key={a.id}>
              <div className="shadow-lg wmd w-[220px] border p-4 dark:bg-gray-900">
                  <Link className="flex overflow-hidden justify-center" to={`details/${a.id}`}>
                    <img
                      className="w-[150px] hover:scale-[1.2] transition duration-500"
                      src={a.thumbnail}
                      alt="img"
                    />
                  </Link>
                <Link to={`details/${a.id}`}>
                  <p className="font-bold l1 hover:underline hover:text-blue-700 my-1 dark:text-white">
                    {a.title}
                  </p>
                </Link>
                <div className="flex jb justify-between">
                  <p className="font-bold fs12 py-4 text-orange-500">
                    ${a.price}
                  </p>
                  <p className="font-bold fs12 py-4 text-blue-500">
                    {a.discountPercentage}% OFF
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="cartbutton"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="fs15">Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>${a.price}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {top.slice(0, 1).map((a) => (
            <div className="bg-slate-100" key={a.id}>
              <div className="shadow-lg wmd w-[220px] border p-4 dark:bg-gray-900">
                  <Link className="flex overflow-hidden justify-center" to={`details/${a.id}`}>
                    <img
                      className="w-[150px] hover:scale-[1.2] transition duration-500"
                      src={a.thumbnail}
                      alt="img"
                    />
                  </Link>
                <Link to={`details/${a.id}`}>
                  <p className="font-bold l1 hover:underline hover:text-blue-700 my-1 dark:text-white">
                    {a.title}
                  </p>
                </Link>
                <div className="flex jb justify-between">
                  <p className="font-bold py-4 fs12 text-orange-500">
                    ${a.price}
                  </p>
                  <p className="font-bold fs12 py-4 text-blue-500">
                    {a.discountPercentage}% OFF
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="cartbutton"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="fs15">Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>${a.price}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {groceries.slice(0, 6).map((a) => (
            <div className="bg-slate-100 mobile-dn" key={a.id}>
              <div className="shadow-lg wmd w-[220px] border p-4 dark:bg-gray-900">
                  <Link className="flex overflow-hidden justify-center" to={`details/${a.id}`}>
                    <img
                      className="w-[150px] hover:scale-[1.2] transition duration-500"
                      src={a.thumbnail}
                      alt="img"
                    />
                  </Link>
                <Link to={`details/${a.id}`}>
                  <p className="font-bold l1 hover:underline hover:text-blue-700 my-1 dark:text-white">
                    {a.title}
                  </p>
                </Link>
                <div className="flex justify-between">
                  <p className="font-bold fs12 py-4 text-orange-500">
                    ${a.price}
                  </p>
                  <p className="font-bold fs12 py-4 text-blue-500">
                    {a.discountPercentage}% OFF
                  </p>
                </div>
                <div className="flex jb justify-center items-center">
                  <button
                    className="cartbutton"
                    onClick={() => dispatch({ type: "addtocart", payload: a })}
                  >
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        stroke="#ffffff"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx={9} cy={21} r={1} />
                        <circle cx={20} cy={21} r={1} />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span className="fs15">Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                          fill="#ffffff"
                        />
                      </svg>
                      <span>${a.price}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
