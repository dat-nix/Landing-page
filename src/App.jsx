import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, RiktPage } from "./pages";

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
                            <HomePage language={language} />
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
