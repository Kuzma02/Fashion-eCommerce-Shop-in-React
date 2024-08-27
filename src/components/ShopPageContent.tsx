import {
  ProductGrid,
  ProductGridWrapper,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";

import { useState } from "react";

const ShopPageContent = ({ category, page} : { category: string; page: number; }) => {
  const [sortCriteria, setSortCriteria] = useState<string>("");
  const [ currentPage, setCurrentPage ] = useState(page);
  
  

  return (
    <>
      <ShopFilterAndSort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
      <ProductGridWrapper sortCriteria={sortCriteria} category={category} page={currentPage} >
        <ProductGrid />
      </ProductGridWrapper>
      <ShowingPagination page={currentPage} category={category} setCurrentPage={setCurrentPage} />
    </>
  );
};
export default ShopPageContent;
