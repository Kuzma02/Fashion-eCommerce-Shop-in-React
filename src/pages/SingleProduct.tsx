import { HiChevronDown } from "react-icons/hi2";
import { Button, ProductItem, StandardSelectInput } from "../components";

const SingleProduct = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 max-[400px]:px-3">
      <div className="grid grid-cols-3 gap-x-8 max-lg:grid-cols-1">
        <div className="lg:col-span-2">
          <img
            src="/src/assets/single product image 1.jpg"
            alt="Luxury Dress"
          />
          <img
            src="/src/assets/single product image 2.jpg"
            alt="Luxury Dress"
          />
        </div>
        <div className="w-full flex flex-col gap-5 mt-9">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Luxury Clothing</h1>
            <div className="flex justify-between items-center">
              <p className="text-base text-secondaryBrown">
                Limited Time Collection
              </p>
              <p className="text-base font-bold">$3600</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <StandardSelectInput />
            <StandardSelectInput />
          </div>
          <div className="flex flex-col gap-3">
            <Button mode="brown" text="Add to cart" />
            <p className="text-secondaryBrown text-sm text-right">
              Delivery estimated on the Friday, July 26
            </p>
          </div>
          <div>
            {/* drowdown items */}
            <div className="flex justify-between items-center border-b border-black/30 h-14">
              <p className="text-black/95 text-base">Description</p>
              <HiChevronDown className="text-base" />
            </div>

            <div className="flex justify-between items-center border-b border-black/30 h-14">
              <p className="text-black/95 text-base">Product Details</p>
              <HiChevronDown className="text-base" />
            </div>

            <div className="flex justify-between items-center border-b border-black/30 h-14">
              <p className="text-black/95 text-base">Delivery Details</p>
              <HiChevronDown className="text-base" />
            </div>
          </div>
        </div>
      </div>

      {/* similar products */}
      <div>
        <h2 className="text-black/90 text-5xl mt-24 mb-12 text-center max-lg:text-4xl">Similar Products</h2>
        <div className="flex flex-wrap justify-between items-center gap-y-8 mt-12 max-xl:justify-start max-xl:gap-5 ">
        <ProductItem image="product image 1.jpg" title="Luxury Dress" category="Best-selling luxury clothing" price="$3500" />
        <ProductItem image="product image 2.jpg" title="Luxury Dress" category="Best-selling luxury clothing" price="$3500" />
        <ProductItem image="product image 3.jpg" title="Luxury Dress" category="Best-selling luxury clothing" price="$3500" />
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
