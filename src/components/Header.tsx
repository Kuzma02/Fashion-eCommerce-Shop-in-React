import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  return (
    <>
    <header className="max-w-screen-2xl flex text-center justify-between items-center py-4 px-5 text-black mx-auto max-sm:px-5 max-[400px]:px-3">
      <HiBars3 className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      <Link
        to="/"
        className="text-4xl font-light tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl"
      >
        FASHION
      </Link>
      <div className="flex gap-4 items-center max-sm:gap-2">
        <Link to="/search">
          <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/login">
          <HiOutlineUser className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/cart">
          <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
        </Link>
      </div>
    </header>
    <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default Header;
