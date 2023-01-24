import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoutes = ({ children }) => {
//   const load = useSelector((state) => state.userReducer.load);
//   const isAuth = useSelector((state) => state.userReducer.isAuth);
//   const token = localStorage.getItem("token")

//   return (
//     <div>{load ? <p>loooadi</p> : isAuth ? children : <Navigate to="/" />}</div>
//   );
// };
const PrivateRoutes = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const token= localStorage.getItem('token')
    return (
        token ? <Outlet/> : <Navigate to="/" />
    )
}


export default PrivateRoutes;
