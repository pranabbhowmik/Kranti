import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handelLogout = () => {
    authservice
      .logoutAccount()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Logoutjsx problem:", error);
      });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-300 hover:bg-blue-100 rounded-full"
      onClick={handelLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
