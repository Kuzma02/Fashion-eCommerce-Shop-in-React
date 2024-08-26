import { Link } from "react-router-dom";
import Button from "./Button";
import { useAppDispatch } from "../hooks";
import { addProductToTheCart } from "../features/cart/cartSlice";
import { formatCategoryName } from "../utils/formatCategoryName";

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
  popularity,
  stock
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity: number;
  stock: number
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px]">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={`/src/assets/${image}`} alt={title} />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        ${price}
      </p>
      <div className="w-full flex flex-col gap-1">
        <Button
          mode="brown"
          text="Add to cart"
          onClick={() =>
            dispatch(
              addProductToTheCart({
                id: id + "xlblack",
                image,
                title,
                category,
                price,
                quantity: 1,
                size: "xl",
                color: "black",
                popularity,
                stock
              })
            )
          }
        />
        <Link to={`/product/${id}`} className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base">Learn more</Link>
      </div>
    </div>
  );
};
export default ProductItem;
