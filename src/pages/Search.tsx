import { useState } from "react";
import {
  Button,
  ProductGrid,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";

const Search = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex items-center mt-24 px-5 max-[400px]:px-3">
        <input
          type="text"
          placeholder="Search products"
          className="border border-gray-300 focus:border-gray-400 h-12 text-xl px-3 w-full outline-none max-sm:text-lg"
        />
        <div className="w-52 max-sm:w-40">
          <Button mode="brown" text="Search" />
        </div>
      </div>

      <ProductGrid />

      <ShowingPagination />
    </div>
  );
};
export default Search;
