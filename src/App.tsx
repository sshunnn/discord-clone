import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log("loginUser :>> ", loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photoUrl: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
