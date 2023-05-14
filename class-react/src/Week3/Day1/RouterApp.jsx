import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./router/MainPage";
import { Page1 } from "./router/page1";
import { Page2 } from "./router/page2";
import { ListPage } from "./router/listPage";
import { ErrorPage } from "./router/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/:Id",
    element: <ListPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default function RouterApp() {
  return <RouterProvider router={router} />;
}
