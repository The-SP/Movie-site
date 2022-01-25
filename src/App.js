import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";

const App = () => {
  return (
    <Router>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default App;
