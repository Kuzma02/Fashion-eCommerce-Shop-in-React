import {
  ProductGrid,
  ProductGridWrapper,
  ShopBanner,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";

const Shop = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-10">
      <ShopBanner />
      <ShopFilterAndSort />
      <ProductGridWrapper>
        <ProductGrid />
      </ProductGridWrapper>
      <ShowingPagination />
    </div>
  );
};
export default Shop;
