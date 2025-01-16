import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import BookDetails from "./BookDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/books/:title`} element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
