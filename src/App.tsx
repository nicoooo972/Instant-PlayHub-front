import { createBrowserRouter, RouterProvider} from "react-router-dom"
import NotFound from "@/pages/NotFound";
import Home from "./pages/Home";
import { RegistrationPage } from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inscription",
    element: <RegistrationPage />,
  },
  {
    path: "/connexion",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
