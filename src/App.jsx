import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RiktPage from "./pages/RiktPage";
import { useState } from "react";

function App() {
    const [language, setLanguage] = useState("en");
    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home language={language} />
                        </>
                    }
                />
                <Route
                    path="/rikt"
                    element={<RiktPage language={language} />}
                />
            </Routes>
        </>
    );
}

export default App;
