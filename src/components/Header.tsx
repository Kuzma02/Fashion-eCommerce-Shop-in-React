import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-14 text-black">
      <HiBars3 className="text-2xl" />
      <h2 className="text-4xl font-light tracking-[1.08px]">FASHION</h2>
      <div className="flex gap-4 items-center">
        <HiOutlineMagnifyingGlass className="text-2xl" />
        <HiOutlineUser className="text-2xl" />
        <HiOutlineShoppingBag className="text-2xl" />
      </div>
    </header>
  )
}
export default Header