import React, { useState } from 'react';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />
      {isAuthenticated ? <ListarTarefa /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;