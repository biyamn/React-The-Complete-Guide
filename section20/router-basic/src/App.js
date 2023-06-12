import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
