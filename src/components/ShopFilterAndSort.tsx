
const ShopFilterAndSort = () => {
  return (
    <div className="flex justify-between items-center px-5 max-sm:flex-col max-sm:gap-5">
      <p className="text-lg">Showing 1–12 of 20 results</p>
      <div className="flex gap-3 items-center">
        <p>Sort by:</p>
        <div className="relative">
          <select className="border border-[rgba(0,0,0,0.40)] px-2 py-1">
            <option value="popularity">Popularity</option>
            <option value="latest">Latest</option>
            <option value="price">Price: low to high</option>
            <option value="price">Price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ShopFilterAndSort;
