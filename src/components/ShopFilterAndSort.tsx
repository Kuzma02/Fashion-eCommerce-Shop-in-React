import { HiChevronDown } from "react-icons/hi2";

const ShopFilterAndSort = () => {
  return (
    <div className="flex justify-between mx-5 max-[400px]:mx-3 py-5 border-b border-black/20 max-md:flex-col max-md:items-center max-md:m-0 max-md:gap-3">
      <div className="flex gap-8 max-md:gap-5 max-[400px]:flex-col max-[400px]:items-center">
        <h2 className="text-xl font-normal max-lg:text-lg max-sm:text-base">Filter By:</h2>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl max-lg:text-lg max-sm:text-base font-light">Collection</h3> <HiChevronDown />
          </div>

          <div className="flex gap-2 items-center">
            <h3 className="text-xl max-lg:text-lg max-sm:text-base font-light">Color</h3> <HiChevronDown />
          </div>

          <div className="flex gap-2 items-center">
            <h3 className="text-xl max-lg:text-lg max-sm:text-base font-light">Price</h3> <HiChevronDown />
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-center max-md:gap-5">
        <p className="text-xl max-lg:text-lg max-sm:text-base font-light">76 Items</p>
        <p>|</p>
        <div className="flex gap-2 items-center">
            <h3 className="text-xl max-lg:text-lg max-sm:text-base font-normal">Sort By</h3> <HiChevronDown />
          </div>
      </div>
    </div>
  );
};
export default ShopFilterAndSort;
