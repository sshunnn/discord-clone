import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/sidebar/chat/Chat";

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
