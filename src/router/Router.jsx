import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourite/Favourite";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/Products/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://fakestoreapi.com/products`),
      },
      {
        path: "/favourites",
        element: <Favourite></Favourite>,
      },
      {
        path: "/cart",
        element: <Favourite></Favourite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
      },
    ],
  },
]);

export default Router;
