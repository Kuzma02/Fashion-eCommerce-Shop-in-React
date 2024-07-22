import HomeCollectionFilter from "./HomeCollectionFilter";
import ProductGrid from "./ProductGrid";

const HomeCollectionSection = () => {
  return (
    <div className="px-5 max-[400px]:px-3">
      <HomeCollectionFilter />
      <ProductGrid />
    </div>
  );
};
export default HomeCollectionSection;
