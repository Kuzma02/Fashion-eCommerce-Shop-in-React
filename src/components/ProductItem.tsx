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
    <div className="w-[400px] flex flex-col gap-2">
      <img src={`/src/assets/${image}`} alt={title} />
      <h2 className="text-black text-center text-3xl tracking-[1.02px]">
        {title}
      </h2>
      <p className="text-secondaryBrown text-lg tracking-wide text-center">
        {category}{" "}
      </p>
      <p className="text-black text-2xl text-center font-bold">{price}</p>
      <div className="w-full flex flex-col gap-1">
        <Button mode="brown" text="Add to cart" />
        <Button mode="white" text="Learn more" />
      </div>
    </div>
  );
};
export default ProductItem;
