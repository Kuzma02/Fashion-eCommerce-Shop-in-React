interface Product {
    id: string;
    title: string;
    image: string;
    category: string;
    price: string;
  }

  interface ProductInCart extends Product {
    quantity: number;
    size: string;
    color: string;
  }