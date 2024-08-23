import HomeCollectionFilter from "./HomeCollectionFilter";
import ProductGrid from "./ProductGrid";
import ProductGridWrapper from "./ProductGridWrapper";

const HomeCollectionSection = () => {
  return (
    <div>
      <HomeCollectionFilter />
      <ProductGridWrapper>
        <ProductGrid />
      </ProductGridWrapper>
    </div>
  );
};
export default HomeCollectionSection;
