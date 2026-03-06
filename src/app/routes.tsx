import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import SecretGuestbook from "./components/SecretGuestbook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "secret-guestbook", element: <SecretGuestbook /> },
    ],
  },
]);
