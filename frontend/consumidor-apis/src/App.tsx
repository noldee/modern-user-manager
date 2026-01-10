import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  // Al cargar, revisamos si ya estaba logueado
  useEffect(() => {
    const session = localStorage.getItem("isLogged");
    if (session === "true") {
      setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={() => setIsLogged(true)} />
      )}
    </>
  );
};

export default App;