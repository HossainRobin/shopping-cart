import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router}></RouterProvider>
);
