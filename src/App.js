import { useContext, useState, createContext, useRef } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  const refBtn = useRef(3);
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    refBtn.current++;
    console.log(refBtn.current);
  };

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#ddd",
        color: theme === "dark" ? "#ddd" : "#222",
        minHeight: "100vh",
      }}
    >
      <h1>Home</h1>
      <ButtonTheme />
      <button onClick={handleClick}>+</button>
    </div>
  );
}

function ButtonTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "dark" ? "#222" : "#ddd",
        color: theme === "dark" ? "#ddd" : "#222",
        padding: "20px",
      }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      topic
    </button>
  );
}

export default App;
