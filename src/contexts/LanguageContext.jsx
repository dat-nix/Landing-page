import { createContext, useContext, useState } from "react";
import contentData from "../configs/content"; // Import nội dung từ content.js

const LanguageContext = createContext(); // Tạo context

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Mặc định là tiếng Anh

    const content = contentData[language]; // Lấy nội dung theo ngôn ngữ hiện tại

    return (
        <LanguageContext.Provider value={{ language, setLanguage, content }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook để sử dụng context trong các component khác
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
