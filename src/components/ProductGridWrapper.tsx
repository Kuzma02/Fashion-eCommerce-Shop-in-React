import React, { ReactElement, useCallback, useEffect, useState } from "react";
import customFetch from "../axios/custom";

const ProductGridWrapper = ({
  searchQuery,
  children,
}: {
  searchQuery?: string;
  children: ReactElement<{ products: Product[] }> | ReactElement<{ products: Product[] }>[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  // Memoize the function to prevent unnecessary re-renders
  // getSearchhProducts will be called only when searchQuery changes
  const getSearchedProducts = useCallback(async (query: string) => {
    let url;
    if (query && query.length > 0) {
      url = `/products?query=${query}`;
    } else {
      query = "";
      url = `/products`;
    }
    const response = await customFetch(url);
    const allProducts = await response.data;
    const searchedProducts = allProducts.filter((product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(searchedProducts);
  }, []);

  useEffect(() => {
    getSearchedProducts(searchQuery || "");
  }, [searchQuery]);

  // Clone the children and pass the products as props to the children
  // This will cause the children to re-render with the new products
  // Also it will cause many re-renders if the children are not memoized
  // So I memoized the ProductGrid component
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child) && products.length > 0) {
      return React.cloneElement(child, { products: products });
    }
    return null;
  });

  return childrenWithProps;
};
export default ProductGridWrapper;
