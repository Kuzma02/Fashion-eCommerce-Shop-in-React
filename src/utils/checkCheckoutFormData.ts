import toast from "react-hot-toast";

export const checkCheckoutFormData = (checkoutData: {
  data: {
    [k: string]: FormDataEntryValue;
  };
  products: ProductInCart[];
  subtotal: number;
}) => {
  if (checkoutData.data?.address === "") {
    toast.error("Address is required");
    return false;
  } else if (checkoutData.data?.apartment === "") {
    toast.error("Apartment is required");
    return false;
  } else if (checkoutData.data?.cardNumber === "") {
    toast.error("Card number is required");
    return false;
  } else if (checkoutData.data?.city === "") {
    toast.error("City is required");
    return false;
  } else if (checkoutData.data?.company === "") {
    toast.error("Company is required");
    return false;
  } else if (checkoutData.data?.country === "") {
    toast.error("Country is required");
    return false;
  } else if (checkoutData.data?.cvc === "") {
    toast.error("CVC is required");
    return false;
  } else if (checkoutData.data?.emailAddress === "") {
    toast.error("Email address is required");
    return false;
  } else if (checkoutData.data?.expirationDate === "") {
    toast.error("Expiration date is required");
    return false;
  } else if (checkoutData.data?.firstName === "") {
    toast.error("First name is required");
    return false;
  } else if (checkoutData.data?.lastName === "") {
    toast.error("Last name is required");
    return false;
  } else if (checkoutData.data?.nameOnCard === "") {
    toast.error("Name on card is required");
    return false;
  } else if (checkoutData.data?.paymentType === "") {
    toast.error("Payment type is required");
    return false;
  } else if (checkoutData.data?.phone === "") {
    toast.error("Phone is required");
    return false;
  } else if (checkoutData.data?.postalCode === "") {
    toast.error("Postal code is required");
    return false;
  } else if (checkoutData.data?.region === "") {
    toast.error("Region is required");
    return false;
  } else if (checkoutData?.products.length === 0) {
    toast.error("Products are required");
    return false;
  } else if (checkoutData?.subtotal === 0) {
    toast.error("Subtotal is required");
    return false;
  }

  return true;
};
