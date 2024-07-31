import { lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@react-gufo-mf/style-guide-ui";
import { PUBLIC_ROUTES } from "./routes";

const NavigationRoutes = () => {
  const Home = lazy(() => import("../pages/Home"));

  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route index path={`/${PUBLIC_ROUTES.HOME}`} element={<Home />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
