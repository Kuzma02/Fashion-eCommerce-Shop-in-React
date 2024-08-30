interface Product {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number;
    popularity: number;
    stock: number;
  }

  interface ProductInCart extends Product {
    id: string;
    quantity: number;
    size: string;
    color: string;
    stock: number;
  }

  interface User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    role: string;
    password: string;
  }