const ShopBanner = ({ category }: { category: string }) => {
  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className="bg-secondaryBrown text-white py-10 flex justify-center items-center mx-5 my-10">
      <h2 className="text-3xl max-sm:text-2xl">
        {category ? formatCategoryName(category) : "Shop page"}
      </h2>
    </div>
  );
};
export default ShopBanner;
