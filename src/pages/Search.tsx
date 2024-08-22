import { useState } from "react";
import {
  Button,
  ProductGrid,
  ShopFilterAndSort,
  ShowingPagination,
} from "../components";
import { Form, redirect, useActionData } from "react-router-dom";
import axios from "axios";

export const searchAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const response = await axios.post("", data);
  console.log(data);

  return redirect("/search");
};

const Search = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Form
        method="post"
        className="flex items-center mt-24 px-5 max-[400px]:px-3"
      >
        <input
          type="text"
          placeholder="Search products"
          className="border border-gray-300 focus:border-gray-400 h-12 text-xl px-3 w-full outline-none max-sm:text-lg"
          name="search-input"
        />
        <div className="w-52 max-sm:w-40">
          <Button mode="brown" text="Search" type="submit" />
        </div>
      </Form>

      <ProductGrid />

      <ShowingPagination />
    </div>
  );
};
export default Search;
