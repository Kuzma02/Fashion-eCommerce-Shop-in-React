import { ProductGrid, ShopBanner, ShopFilterAndSort, ShowingPagination } from "../components";

const Shop = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <ShopBanner />
      <ShopFilterAndSort />
      <ProductGrid />
      <ShowingPagination />
    </div>
  );
};
export default Shop;
