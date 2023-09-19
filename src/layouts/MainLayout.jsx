import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <div>
          <h1 className="text-xl font-bold">Amajhon</h1>
        </div>
        <nav>
          <ul className="flex gap-5">
            
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Dashboard
            </NavLink>

          </ul>
        </nav>
      </section>

      <div className="my-10">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
