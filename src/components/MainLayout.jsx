import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <div className="h-[10%] bg-gray-600 text-white text-center text-5xl">
        <Header />
      </div>
      <div className="h-[80%] bg-blue-600 text-white flex flex-col justify-center items-center text-2xl gap-3">
        <Outlet />
      </div>
      <div className="h-[10%] bg-gray-600 text-white  text-center text-5xl">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
