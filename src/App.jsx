import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage/Home.jsx";
import { NotF } from "./pages/NotFounded/NoPage.jsx";
import LoadAnimation from "./components/LoadAnimation/LoadAnimation.jsx";
import { useEffect, useState } from "react";

function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      setSplashScreen(false);
    }, 4500);

    return () => clearTimeout(splashScreenTimer);
  }, []);

  return (
    <>
      {splashScreen && <LoadAnimation />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotF />} />
          <Route path="check" element={<LoadAnimation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
