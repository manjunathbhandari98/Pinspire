import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";
import Create from "./pages/Create";
import Message from "./pages/Messages";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Flick from "./pages/Flick";
import { Routes, Route } from "react-router-dom";
import BottomBar from "./pages/BottomBar";
import SearchPage from "./pages/SearchPage";
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
              path="/flicks"
              element={<Flick />}
            />
            <Route
              path="/notifications"
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
            <Route
              path="/search-page"
              element={<SearchPage />}
            />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </>
  );
};

export default App;
