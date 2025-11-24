// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../components/MainLayout";
// import PageNoteFound from "../pages/PageNoteFound";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Team from "../pages/Team";
// import Member from "../pages/Member";
// import Company from "../pages/Company";
// import Services from "../pages/Services";
// import WebService from "../pages/WebService";
// import AppService from "../pages/AppService";
// import Products from "../pages/Products";
// import ProductDetails from "../pages/ProductDetails";
// import Reviews from "../pages/Reviews";
// import Specs from "../pages/Specs";
// import Contact from "../pages/Contact";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import Dashboard from "../pages/Dashboard";
// import Profile from "../pages/Profile";
// import Settings from "../pages/Settings";
// import Security from "../pages/Security";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Cart from "../pages/Cart";

// const Home = lazy(() => import("../pages/Home"));
// const AllRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//         children: [
//           {
//             path: "team",
//             element: <Team />,
//             children: [
//               {
//                 path: "member/:id",
//                 element: <Member />,
//               },
//             ],
//           },
//           {
//             path: "company",
//             element: <Company />,
//           },
//         ],
//       },
//       {
//         path: "services",
//         element: <Services />,
//         children: [
//           {
//             path: "web",
//             element: <WebService />,
//           },
//           {
//             path: "app",
//             element: <AppService />,
//           },
//         ],
//       },
//       {
//         path: "products",
//         element: <Products />,
//         children: [
//           {
//             path: ":productId",
//             element: <ProductDetails />,
//             children: [
//               {
//                 path: "reviews",
//                 element: <Reviews />,
//               },
//               {
//                 path: "specs",
//                 element: <Specs />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "blog",
//         element: <Blog />,
//         children: [
//           {
//             path: ":slug",
//             element: <BlogDetails />,
//           },
//         ],
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//         children: [
//           {
//             path: "profile",
//             element: <Profile />,
//           },
//           {
//             path: "settings",
//             element: <Settings />,
//             children: [
//               {
//                 path: "security",
//                 element: <Security />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <Signup />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       { path: "*", element: <PageNoteFound /> },
//     ],
//   },
// ]);

// export default AllRouter;

// import { createBrowserRouter, lazy } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import PageNoteFound from "../pages/PageNoteFound";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Team = lazy(() => import("../pages/Team"));
const Member = lazy(() => import("../pages/Member"));
const Company = lazy(() => import("../pages/Company"));
const Services = lazy(() => import("../pages/Services"));
const WebService = lazy(() => import("../pages/WebService"));
const AppService = lazy(() => import("../pages/AppService"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Reviews = lazy(() => import("../pages/Reviews"));
const Specs = lazy(() => import("../pages/Specs"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Security = lazy(() => import("../pages/Security"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Cart = lazy(() => import("../pages/Cart"));

const AllRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "team",
            element: <Team />,
            children: [{ path: "member/:id", element: <Member /> }],
          },
          { path: "company", element: <Company /> },
        ],
      },

      {
        path: "services",
        element: <Services />,
        children: [
          { path: "web", element: <WebService /> },
          { path: "app", element: <AppService /> },
        ],
      },

      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: ":productId",
            element: <ProductDetails />,
            children: [
              { path: "reviews", element: <Reviews /> },
              { path: "specs", element: <Specs /> },
            ],
          },
        ],
      },

      { path: "contact", element: <Contact /> },

      {
        path: "blog",
        element: <Blog />,
        children: [{ path: ":slug", element: <BlogDetails /> }],
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "profile", element: <Profile /> },
          {
            path: "settings",
            element: <Settings />,
            children: [{ path: "security", element: <Security /> }],
          },
        ],
      },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <PageNoteFound /> },
    ],
  },
]);

export default AllRouter;
