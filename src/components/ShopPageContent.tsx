import {
  ProductGrid,
  ProductGridWrapper,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";

import { useState } from "react";

const ShopPageContent = ({ category } : { category: string; }) => {
  const [sortCriteria, setSortCriteria] = useState<string>("");

  return (
    <>
      <ShopFilterAndSort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
      <ProductGridWrapper sortCriteria={sortCriteria} category={category} >
        <ProductGrid />
      </ProductGridWrapper>
      <ShowingPagination />
    </>
  );
};
export default ShopPageContent;
