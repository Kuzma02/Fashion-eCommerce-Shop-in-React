import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
  return (
    <header className="max-w-screen-2xl flex justify-between items-center py-4 px-14 text-black mx-auto max-sm:px-5 max-[400px]:px-3">
      <HiBars3 className="text-2xl max-sm:text-xl" />
      <h2 className="text-4xl font-light tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl">FASHION</h2>
      <div className="flex gap-4 items-center max-sm:gap-2">
        <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
        <HiOutlineUser className="text-2xl max-sm:text-xl" />
        <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
      </div>
    </header>
  )
}
export default Header