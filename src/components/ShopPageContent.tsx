import {
  ProductGrid,
  ProductGridWrapper,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";

import { useState } from "react";

const ShopPageContent = () => {
  const [sortCriteria, setSortCriteria] = useState<string>("");

  return (
    <>
      <ShopFilterAndSort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
      <ProductGridWrapper sortCriteria={sortCriteria}>
        <ProductGrid />
      </ProductGridWrapper>
      <ShowingPagination />
    </>
  );
};
export default ShopPageContent;
