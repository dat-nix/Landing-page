import React, { useState } from "react";

const agendaData = {
    "May 30th": [
        { time: "6:30 PM", activity: "Seminar begin" },
        { time: "8:30 PM", activity: "Seminar ends" },
    ],
    "May 31st": [
        { time: "8:00 AM", activity: "Check-in and medical check" },
        { time: "9:30 AM", activity: "Opening Ceremony" },
        { time: "10:00 AM", activity: "Morning Matches" },
        { time: "12:00 AM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:00 PM", activity: "Award Ceremony" },
    ],
    "June 1st": [
        { time: "8:00 AM", activity: "Check-in and medical check" },
        { time: "9:15 AM", activity: "Day 2 Opening" },
        { time: "9:30 AM", activity: "Morning Matches" },
        { time: "12:00 AM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:00 PM", activity: "Award Ceremony" },
    ],
};

const TestPage = () => {
    const dates = Object.keys(agendaData);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="font-sans bg-[#154c9e] text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center py-16 text-center bg-gradient-to-b from-[#154c9e] to-blue-700">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    RMIT ICHIGEKI KENDO TOURNAMENT 2025
                </h1>
                <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
                    REGISTER HERE
                </button>
            </section>

            {/* About Section */}
            <section className="py-16 text-center">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                    ABOUT THE EVENT
                </h2>
                <p className="max-w-xl mx-auto text-lg opacity-90">
                    Hosted by RMIT Shinai Kendo Club, this tournament brings
                    together Kendo enthusiasts from across Vietnam to compete
                    and celebrate the Kendo community in HCMC.
                </p>
            </section>

            {/* Event Info Section */}
            <section className="py-16 text-center">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                    EVENT INFORMATION
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="text-lg text-left space-y-3">
                        <p>
                            <strong>Date:</strong> May 30 - June 1st 2025
                        </p>
                        <p>
                            <strong>Time:</strong> 8:00 AM - 5:00 PM
                        </p>
                        <p>
                            <strong>Location:</strong> 702 Nguyen Van Linh, Q7,
                            RMIT University SGS Sports Hall Building 10
                        </p>
                    </div>
                    <div>
                        <div className="w-48 h-48 bg-gray-200 text-black flex items-center justify-center rounded">
                            🗺️ Map
                        </div>
                    </div>
                </div>
            </section>

            {/* Agenda Section */}
            <section className="py-16 text-center bg-blue-800">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                    AGENDA
                </h2>
                <p className="text-lg mb-4">Choose the date</p>
                <div className="flex justify-center gap-4 mb-6">
                    {dates.map((date, index) => (
                        <button
                            key={date}
                            onClick={() => setCurrentIndex(index)}
                            className={`text-2xl font-bold transition ${
                                currentIndex === index
                                    ? "text-white"
                                    : "text-blue-300"
                            }`}
                        >
                            {date.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center">
                    <div className="relative text-left">
                        {/* Timeline line */}
                        <div className="absolute left-2 top-0 w-1 h-full bg-white opacity-70"></div>
                        {/* Agenda items */}
                        <div className="space-y-8 pl-8">
                            {agendaData[dates[currentIndex]].map((item, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-7.5 top-1 w-4 h-4 bg-yellow-400 border-2 border-white rounded-full"></div>
                                    <div className="text-lg font-bold">
                                        {item.time}
                                    </div>
                                    <div className="text-sm opacity-90">
                                        {item.activity}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="py-16 text-center">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                    HOW TO REGISTER
                </h2>
                <p className="mb-4">
                    Complete the registration form before April 15, 2025.
                </p>
                <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
                    DOWNLOAD REGISTRATION FORM
                </button>
            </section>

            {/* Sponsor Section */}
            <section className="py-16 bg-white text-black text-center">
                <h3 className="text-xl font-semibold mb-6">
                    Thanks to our sponsor
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-24 h-12 bg-gray-300 rounded"
                        ></div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-sm bg-black text-white">
                <p>If you have any questions, contact us via:</p>
                <div className="flex justify-center gap-4 mt-2">
                    <span>📧</span>
                    <span>📞</span>
                    <span>📸</span>
                </div>
            </footer>
        </div>
    );
};

export default TestPage;
