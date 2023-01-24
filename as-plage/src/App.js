import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EndroitsList from "./components/endroits/EndroitsList";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profil from "./pages/profil/Profil";
import Error from "./components/Error";
import AddEndroit from "./pages/endroits/AddEndroit";
import EditEndroit from "./pages/endroits/EditEndroit";
import DocumentPages from "./pages/documents/DocumentPages";
import ReclamationList from "./components/reclamation/ReclamationList";
import AddReclamation from "./pages/reclamation/AddReclamation";
import UserList from "./components/users/UserList";
import EditUser from "./pages/profil/EditUser";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/users";
import FooterNavBar from "./pages/footerBar/FooterNavBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/endroit" element={<EndroitsList />} />
        <Route path="/add" element={<AddEndroit />} />
        <Route path="/edit/:id" element={<EditEndroit />} />
        <Route path="/document" element={<DocumentPages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/reclamation/:id" element={<AddReclamation />} /> 
        <Route element={<PrivateRoutes />}>
          <Route path="/profil" element={<Profil />} />
          <Route path="/reclamation" element={<ReclamationList />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
      <FooterNavBar />
    </div>
  );
}

export default App;
