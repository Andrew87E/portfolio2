import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../../../data/global";
import { Name } from "./name";
import Image from "next/image";

// show log in button if user is on blog page

export const Navbar = ({ currentPage }: any) => {
  // const [drop, setDrop] = useState(false);

  // const handleDrop = () => {
  //     if (user) {
  //         setDrop((current) => !current);
  //     }
  // };

  // const handleLogin = () => {
  //     if (currentPage === "Blog") {
  //         return (
  //             <Link href="/api/auth/login">
  //                 <a
  //                     className="text-white hover:border-gray-300 transition-all duration-700 hover:duration-100 hover:scale-125 mt-4 opacity-70 mr-5 hover:text-white hover:opacity-100"
  //                     onClick={handleDrop}
  //                 >
  //                     Log In
  //                 </a>
  //             </Link>
  //         );
  //     } else {
  //         return null;
  //     }
  // };

  return (
    <>
      <Name />
      <ul className="nav-menu inline-flex mr-4 flex-wrap ae-nav-links text-lg lg:text-xl 2xl:text-2xl ae-text-outline-small-dark"></ul>
    </>
  );
};