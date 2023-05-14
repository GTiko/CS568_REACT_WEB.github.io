import { lazy, Suspense } from "react";

const MyComponent = lazy(() => import("./LazyComp"));

const LazyApp = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default LazyApp;
