import React from "react";
import AppLayout from "./pages/AppLayout";
import Cities from "./pages/Cities";
import Country from "./pages/Country";
import Form from "./pages/Form";
import { Navigate } from "react-router-dom";
import { CityContextProvider } from "./contexts/CityContext/CityContext";
import { GeoContextProvider } from "./contexts/CityContext/GeoContext";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="cities" replace />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CityContextProvider>
      <GeoContextProvider>
        <RouterProvider router={router} />
      </GeoContextProvider>
    </CityContextProvider>
  );
};

export default App;
