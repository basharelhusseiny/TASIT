import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import SuccessfulLogin from "./pages/successfulLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/successfulLogin",
    element: <SuccessfulLogin />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
