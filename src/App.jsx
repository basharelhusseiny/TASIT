import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import SuccessLogin from "./pages/SuccessLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/SuccessLogin",
    element: <SuccessLogin />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
