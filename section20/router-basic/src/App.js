import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    // 경로에 의존하는 레이아웃을 만들 수 있음. 여기서는 
    // 메인에 대한 네비게이션 레이아웃을 만든 거임.
    // 부모를 /admin이라고 설정하면 그에 대한 네비게이션 레이아웃을 만들 수 있음.
    children:[
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage />, },
    ] 
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
