import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
