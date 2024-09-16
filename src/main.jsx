import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import CreateTrip from "./create-trip";
import Header from "./components/custom/Header";
import {Toaster} from "./components/ui/sonner"
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./view-trip/[tripId]/index";
import MyTrips from "./my-trips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/create-trip",
    element: <CreateTrip/>
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip/>
  },
  {
    path: "/my-trips",
    element: <MyTrips/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <Toaster/>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
