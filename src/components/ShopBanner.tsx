const ShopBanner = () => {
  return (
    <div className="shop-banner h-[550px] mx-5 max-[400px]:mx-3 text-white max-lg:h-[400px] max-sm:h-[200px]">
      <div className=" flex flex-col justify-center items-center h-full w-[85%] mx-auto gap-3">
      <h1 className="text-5xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Luxury Clothing</h1>
      <p className="text-lg max-lg:text-base max-md:text-sm max-sm:hidden">Experience the epitome of elegance with our luxury clothing collection, crafted from the finest materials to elevate your wardrobe.
      Discover timeless sophistication and unmatched quality in every piece, designed to make a lasting impression.</p>

      </div>
    </div>
  )
}
export default ShopBanner