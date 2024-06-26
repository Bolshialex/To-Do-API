import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} exact />
        <Route path="register" element={<RegisterPage />} exact />
        {/* Add a route for the login page */}
        <Route element={<RequireAuth />}>
          {/* Add a route for protected route */}
        </Route>
        <Route path="*" />
      </Route>
    </Routes>
  );
}

export default App;
