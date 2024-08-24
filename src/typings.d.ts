interface Product {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number;
    popularity: number;
  }

  interface ProductInCart extends Product {
    quantity: number;
    size: string;
    color: string;
  }