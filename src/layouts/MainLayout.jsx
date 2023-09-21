import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import "./style.css";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoadingProducts = navigation.state === "loading";

  // Loading issue solved.
  // আপনাদের যদি কখনো ডাটা লোড হচ্ছে কিনা এইটা চেক করার প্রয়োজন হয়ে তাহলে এইভাবে স্টেট চেক করে করতে পারেন ।
  //স্টেট এর মধ্যে loading নামে একটা ভেলু থাকে। এইটা ডাটা না পাওয়া পর্যন্ত ট্র থাকে। আর ডাটা পেয়ে গেলে ফলস হয়ে যায় ।

  //আমরা নিচে কন্ডিশনালি রেন্ডার করেছি যদি ভেলু সত্য হয় তাহলে লোডিং স্পিনার কাজ করবে। ফলস হলে আমাডের ডাটা গুলো দেখাবে ।




  const style = {
    backgroundColor: "#ffffff",
    color: "red",
  };

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
                isPending ? "pending" : isActive ? `${style.color}` : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/form"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Form
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

      {isLoadingProducts ? (
        <Spinner></Spinner>
      ) : (
        <div className="my-10 min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
