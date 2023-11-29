import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "@fontsource/roboto/400.css";
import "./App.css";
import "./bootstrap-grid.min.css";
import { Footer } from "./components/login/Footer";
import { Register } from "./components/login/Register";
import { Login } from "./components/login/Login";
import { Logout } from "./components/login/Logout";
import { Dashboard } from "./components/Dashboard";
import { Upimage } from "./components/Upimage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/upimage" element={<Upimage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
