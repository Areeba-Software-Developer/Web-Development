import "./App.css";
import { useState, useEffect } from "react";
import NavScrollExample from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";

const themes = [
  { name: "coral", color: "#E7717D" },
  { name: "gray", color: "#C2CAD0" },
  { name: "beige", color: "#C2B9B0" },
  { name: "brown", color: "#7E685A" },
  { name: "green", color: "#AFD275" },
];

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [themeIndex, setThemeIndex] = useState(0);

  const theme = themes[themeIndex];

  const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  });

  setTimeout(() => {
    setAlert(null);
  }, 2000);
};

  const clearAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#212529" : theme.color;
    document.body.style.color = mode === "dark" ? "white" : "#1f1f1f";
  }, [mode, theme.color]);

return (
  <BrowserRouter>
  <NavScrollExample
  title="TextUtils"
  home="Home"
  mode={mode}
  theme={theme}
  cycleTheme={cycleTheme}
  toggleMode={toggleMode}
/>

    <Alert alert={alert} />

    <div className="container">
      <Routes>

        <Route
          path="/"
          element={
            <TextForm
              heading="Enter your text here"
              mode={mode}
              theme={theme}
              showAlert={showAlert}
            />
          }
        />

        <Route
          path="/about"
          element={<About mode={mode} />}
        />

      </Routes>
    </div>

  </BrowserRouter>
);
}

export default App;