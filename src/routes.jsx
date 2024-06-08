import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routes;
