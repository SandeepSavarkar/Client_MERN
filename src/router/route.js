import { lazy, useMemo } from "react";
import Forms from "../pages/form";
import { retry } from "../utils/functions";

const HomePage = lazy(() => retry(() => import("../pages/home")));
const FormPage = lazy(() => retry(() => import("../pages/form")));
// const FormPreview = lazy(() =>
//   retry(() => import("../presentation/FormPreview"))
// );

const useRoutes = () => {
  const routes = [
    {
      id: "default",
      isPublic: true,
      exact: true,
      path: "/",
      element: <HomePage />,
    },
    {
      id: "addForm",
      isPublic: true,
      exact: true,
      path: "/add-form",
      element: <FormPage />,
    },
  ];

  const publicRoutes = useMemo(
    () => routes.filter((route) => route.isPublic),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { publicRoutes, routes };
};

export default useRoutes;
