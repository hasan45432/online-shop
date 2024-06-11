import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AdminPanel from "./pages/adminPanel/AdminPanel";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/adminpanel", element: <AdminPanel /> },
];

export default routes;
