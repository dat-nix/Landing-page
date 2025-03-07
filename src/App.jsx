import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RiktPage from "./pages/RiktPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                        </>
                    }
                />
                <Route path="/rikt" element={<RiktPage />} />
            </Routes>
        </>
    );
}

export default App;
