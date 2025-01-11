import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import Create from "./pages/Create";
import Message from "./pages/Messages";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="main flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/ideas"
              element={<Ideas />}
            />
            <Route
              path="/messages"
              element={<Message />}
            />
            <Route
              path="/notification"
              element={<Notification />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
