import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Shop,
  SingleProduct,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
