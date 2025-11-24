import { RouterProvider } from "react-router-dom";
import AllRouter from "./routers/AllRouter";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import Member from "./pages/Member";
// import Company from "./pages/Company";
// import Services from "./pages/Services";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
// import Dashboard from "./pages/Dashboard";
// import BlogDetails from "./pages/BlogDetails";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import Security from "./pages/Security";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import Reviews from "./pages/Reviews";
// import Specs from "./pages/Specs";
// import WebService from "./pages/WebService";
// import AppService from "./pages/AppService";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

const App = () => {
  // const arrData = [
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //     children: [
  //       {
  //         path: "team",
  //         element: <Team />,
  //         children: [
  //           {
  //             path: "member/:id",
  //             element: <Member />,
  //           },
  //         ],
  //       },
  //       {
  //         path: "company",
  //         element: <Company />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/services",
  //     element: <Services />,
  //     children: [
  //       {
  //         path: "web",
  //         element: <WebService />,
  //       },
  //       {
  //         path: "app",
  //         element: <AppService />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/products",
  //     element: <Products />,
  //     children: [
  //       {
  //         path: ":productId",
  //         element: <ProductDetails />,
  //         children: [
  //           {
  //             path: "reviews",
  //             element: <Reviews />,
  //           },
  //           {
  //             path: "specs",
  //             element: <Specs />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     path: "/blog",
  //     element: <Blog />,
  //     children: [
  //       {
  //         path: ":slug",
  //         element: <BlogDetails />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "profile",
  //         element: <Profile />,
  //       },
  //       {
  //         path: "settings",
  //         element: <Settings />,
  //         children: [
  //           {
  //             path: "security",
  //             element: <Security />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Signup />,
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  // ];

  return (
    <div className="h-screen bg-amber-500">
      {/* <div className="h-[10%] bg-gray-800 text-center text-5xl text-white">
        <Header />
      </div>
      <div className="h-[80%] bg-cyan-600 flex flex-col justify-center items-center gap-3 text-2xl">
        <Routes>
          {arrData.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}>
              {item.children &&
                item.children.map((child, index) => (
                  <Route key={index} path={child.path} element={child.element}>
                    {child.children &&
                      child.children.map((children, index) => (
                        <Route
                          key={index}
                          path={children.path}
                          element={children.element}
                        />
                      ))}
                  </Route>
                ))}
            </Route>
          ))}
        </Routes>
      </div>
      <div className="h-[10%] bg-gray-800 text-center text-5xl text-white">
        <Footer />
      </div> */}
      <RouterProvider router={AllRouter} />
    </div>
  );
};

export default App;
