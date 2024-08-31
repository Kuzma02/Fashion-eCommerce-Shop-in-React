import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20">
      <h1 className="text-5xl font-light text-center">Order Confirmation</h1>
      <p className="text-center mt-5 text-lg">
        Your order has been confirmed and will be shipped shortly.
      </p>
      <Link
        to="/shop"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        Continue shopping
      </Link>
      <Link
        to="/order-history"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        See order history and status
      </Link>
    </div>
  );
};
export default OrderConfirmation;
