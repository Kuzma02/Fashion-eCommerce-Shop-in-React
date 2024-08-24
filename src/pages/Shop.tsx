import {
  ProductGrid,
  ProductGridWrapper,
  ShopBanner,
  ShopFilterAndSort,
  ShopPageContent,
  ShowingPagination,
} from "../components";

const Shop = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-10">
      <ShopBanner />
      <ShopPageContent />
    </div>
  );
};
export default Shop;
