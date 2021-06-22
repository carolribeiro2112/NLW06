import { BrowserRouter } from "react-router-dom";

import { Routes } from './routes/index';

import { AuthContextProvider } from './context/AuthContext'; 

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
