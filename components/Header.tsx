import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  //for nav scroll fade (use observerApi instead)
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScreoll = () => {
      //checking scrollY on window

      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //attaching add event listner on window
    window.addEventListener("scroll", handleScreoll);
    return () => {
      window.addEventListener("scroll", handleScreoll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light ">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6" />
        <Link href="/accounts">
          <img
            src="https://rb.gy/g1pwyx"
            alt="acc"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
