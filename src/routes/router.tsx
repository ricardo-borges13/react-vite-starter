import { createBrowserRouter } from "react-router-dom";
import { lazy} from "react";
import { Layout } from "@/components/Layout/Layout";
import Home from "@/pages/Home";

const QuemSomos = lazy(() => import("@/pages/QuemSomos"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/quem-somos", element: <QuemSomos />}

    ]
  }
]);
