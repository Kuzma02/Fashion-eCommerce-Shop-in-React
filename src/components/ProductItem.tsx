import { Link } from "react-router-dom";
import Button from "./Button";

const ProductItem = ({
  image,
  title,
  category,
  price,
}: {
  image: string;
  title: string;
  category: string;
  price: string;
}) => {
  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <Link
        to={`/product/${title}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={`/src/assets/${image}`} alt={title} />
      </Link>
      <Link
        to={`/product/${title}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {category}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        {price}
      </p>
      <div className="w-full flex flex-col gap-1">
        <Button mode="brown" text="Add to cart" />
        <Button mode="white" text="Learn more" />
      </div>
    </div>
  );
};
export default ProductItem;
