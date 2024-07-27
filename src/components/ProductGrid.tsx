import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="max-w-screen-2xl flex flex-wrap justify-between items-center gap-y-8 mx-auto mt-12 max-xl:justify-start max-xl:gap-5 px-5 max-[400px]:px-3">
      {products && products.map((product: Product) => (
        <ProductItem
          key={nanoid()}
          id={product.id}
          image={product.image}
          title={product.title}
          category={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
};
export default ProductGrid;
