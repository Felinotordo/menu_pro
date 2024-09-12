import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { ItemsProvider } from "./context/context";
import Cart from "./pages/Cart";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;
