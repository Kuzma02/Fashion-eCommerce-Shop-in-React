import { HiChevronDown } from "react-icons/hi2";
import { Button, ProductItem, StandardSelectInput } from "../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import withSelectInputWrapper from "../utils/withSelectInputWrapper";

const SingleProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const params = useParams<{ id: string }>();

  const SelectInputUpgrade = withSelectInputWrapper(StandardSelectInput);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/products/${params.id}`
      );
      const data = await response.json();
      setSingleProduct(data);
    };

    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchSingleProduct();
    fetchProducts();
  }, [params.id]);

  return (
    <div className="max-w-screen-2xl mx-auto px-5 max-[400px]:px-3">
      <div className="grid grid-cols-3 gap-x-8 max-lg:grid-cols-1">
        <div className="lg:col-span-2">
          <img
            src={`/src/assets/${singleProduct?.image}`}
            alt={singleProduct?.title}
          />
          <img
            src={`/src/assets/${singleProduct?.image}`}
            alt={singleProduct?.title}
          />
        </div>
        <div className="w-full flex flex-col gap-5 mt-9">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">{singleProduct?.title}</h1>
            <div className="flex justify-between items-center">
              <p className="text-base text-secondaryBrown">
                Limited Time Collection
              </p>
              <p className="text-base font-bold">$3600</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SelectInputUpgrade
              selectList={[
                { id: 1, value: "XS" },
                { id: 2, value: "SM" },
                { id: 3, value: "M" },
                { id: 4, value: "LG" },
                { id: 5, value: "XL" },
                { id: 6, value: "2XL" },
              ]}
            />
            <SelectInputUpgrade
              selectList={[
                { id: 1, value: "BLACK" },
                { id: 2, value: "RED" },
                { id: 3, value: "BLUE" },
                { id: 4, value: "WHITE" },
                { id: 5, value: "ROSE" },
                { id: 6, value: "GREEN" },
              ]}
            />
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
        <h2 className="text-black/90 text-5xl mt-24 mb-12 text-center max-lg:text-4xl">
          Similar Products
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-y-8 mt-12 max-xl:justify-start max-xl:gap-5 ">
          {products.slice(0, 3).map((product: Product) => (
            <ProductItem
              key={product?.id}
              id={product?.id}
              image={product?.image}
              title={product?.title}
              category={product?.category}
              price={product?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
