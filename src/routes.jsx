import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import IndexPAdmin from "./pages/adminPanel/IndexPAdmin";
import CategoryPAdmin from "./pages/adminPanel/category/CategoryPAdmin";
import ProductPAdmin from "./pages/adminPanel/product/ProductPAdmin";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/p-admin/*",
    element: <IndexPAdmin />,
    children: [
      { path: "category", element: <CategoryPAdmin /> },
      { path: "product", element: <ProductPAdmin /> },
    ],
  },
];

export default routes;
