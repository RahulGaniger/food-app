import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Import App correctly
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import reportWebVitals from "./reportWebVitals"; // ✅ Add this import
import Error from "./Components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
