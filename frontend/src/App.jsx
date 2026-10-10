import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTopButton from "./components/BackToTopButton";
import Home from "./pages/Home";

function PortfolioLayout({ children }) {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <PortfolioLayout>
              <Home />
            </PortfolioLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}
