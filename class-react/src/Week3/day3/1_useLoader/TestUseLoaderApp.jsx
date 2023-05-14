import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React, { Suspense } from "react";
import { Home } from "./Home";
import { ErrorPage } from "./Error";
import { Root } from "./Links";
import { Data, dataLoader } from "./data";
const LazyAbout = React.lazy(() => import("./About"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Data" element={<Data />} loader={dataLoader} />
        <Route
          path="/About"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </>
  )
);

export default function TestUserLoaderData() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
