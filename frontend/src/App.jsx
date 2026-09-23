import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./components/HomePage.jsx";
import CreatePost from "./components/CreatePost.jsx";
import ViewPosts from "./components/viewPosts.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/view-posts" element={<ViewPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
