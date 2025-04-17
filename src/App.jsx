import "./App.css";
import Home from "./Pages/Home";
import Mylibrary from "./Pages/Mylibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FullGenre from "./Components/FullGenre";
import BookPage from "./Pages/BookPage";
import Explore from "./Pages/Explore";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import AuthPage from "./Pages/AuthPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="/library" element={<Mylibrary />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/genre/:id" element={<FullGenre />} />
          <Route path="/book/:id" element={<BookPage />} />
          
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
