import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostPages from "./pages/PostsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<PostPages />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
