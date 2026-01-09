import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import LoginPage from './pages/login.tsx';
import ProductsPage from './pages/products.tsx';
import SidebarLayout from './components/layout/sidebar-layout.tsx';
import SearchPage from './pages/search.tsx';
import { authMiddleware, publicMiddleware } from './utils/middlewares.ts';

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
    middleware: [publicMiddleware]
  },
  {
    path: "/",
    Component: SidebarLayout,
    middleware: [authMiddleware],
    children: [
      { index: true, Component: ProductsPage },
      { path: "search", Component: SearchPage },
    ],
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
