import ProductItem from "./ProductItem"

const ProductGrid = () => {
  return (
    <div className="max-w-screen-2xl flex flex-wrap justify-between items-center gap-y-8 mx-auto mt-12 max-xl:justify-start max-xl:gap-5">
        <ProductItem image="product image 1.jpg" title="Luxury Dress" category="Best-selling luxury clothing" price="$3500" />
        <ProductItem image="product image 2.jpg" title="Luxury Black Clothing" category="Best-selling luxury clothing" price="$1050" />
        <ProductItem image="product image 3.jpg" title="Luxury Blue Dress" category="Best-selling luxury clothing" price="$5000" />
        <ProductItem image="product image 4.jpg" title="Luxury Brown Dress" category="Best-selling luxury clothing" price="$2500" />
        <ProductItem image="product image 5.jpg" title="Special Brown Dress" category="Best-selling luxury clothing" price="$5200" />
        <ProductItem image="product image 6.jpg" title="Special Luxury Dress" category="Best-selling luxury clothing" price="$2000" />
        </div>
  )
}
export default ProductGrid