import React from "react";
import RIKT from "./RIKT";

const RiktPage = () => {
    return (
        <>
            <RIKT />
            <div className="container mx-auto py-12 px-6 text-white bg-gray-900">
                {/* Header Section */}
                <div className="text-center py-12 bg-gradient-to-b from-[#EA4607] to-[#F2AF43] rounded-lg shadow-lg mt-10">
                    <h1 className="text-5xl font-extrabold text-white border-b-4 border-white inline-block pb-2">
                        RMIT ICHIGEKI KENDO TOURNAMENT 2025
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        The premier Kendo competition for young warriors in Ho
                        Chi Minh City.
                    </p>
                </div>

                {/* Tournament Information */}
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-[#F2AF43] border-b-2 border-[#F2AF43] pb-2">
                        Tournament Information
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed">
                        The **RMIT Ichigeki Kendo Tournament 2025** aims to
                        create opportunities for young kendoka to compete,
                        improve their skills, and strengthen the Kendo community
                        in Ho Chi Minh City.
                    </p>
                </section>

                {/* Event Schedule */}
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-[#F2AF43] border-b-2 border-[#F2AF43] pb-2">
                        Event Schedule
                    </h2>
                    <div className="mt-6 space-y-4 text-lg">
                        <p>
                            <strong>📅 Date:</strong> May 30th - June 1st, 2025
                        </p>
                        <p>
                            <strong>🕗 Time:</strong> 8:00 AM - 5:00 PM
                        </p>
                        <p>
                            <strong>📍 Venue:</strong> RMIT University Saigon
                            South Campus Sports Hall
                        </p>
                    </div>
                    <div className="mt-6 bg-[#EA4607] p-6 rounded-lg shadow-md text-white">
                        <h3 className="text-2xl font-semibold">
                            Saturday, May 30th
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>8:00 AM - Check-in & Shinai Check</li>
                            <li>9:15 AM - Opening Ceremony</li>
                            <li>9:30 AM - Morning Matches</li>
                            <li>12:00 PM - Lunch Break</li>
                            <li>1:00 PM - Afternoon Matches</li>
                            <li>3:00 PM - Award Ceremony</li>
                        </ul>
                    </div>
                </section>

                {/* Registration Process */}
                <section className="mt-12">
                    <h2 className="text-3xl font-semibold text-[#F2AF43] border-b-2 border-[#F2AF43] pb-2">
                        How to Register
                    </h2>
                    <p className="mt-4 text-lg">
                        To participate, complete the registration form below and
                        submit it before{" "}
                        <span className="text-white text-2xl font-extrabold">
                            OCTOBER 6TH, 2024, 11:59 PM
                        </span>
                        ! ⚠️
                    </p>
                    {/* TODO: Including the form download package here */}
                </section>

                {/* Contact Information */}
                <section className="mt-12 text-center py-8 bg-[#EA4607] rounded-lg shadow-md text-white">
                    <h2 className="text-3xl font-semibold text-[#F2AF43]">
                        Need Assistance?
                    </h2>
                    <p className="mt-4 text-lg">
                        Email us at{" "}
                        <a
                            href="mailto:shinseikendoclub.sgs@rmit.edu.vn"
                            className="text-[#F2AF43] underline"
                        >
                            shinseikendoclub.sgs@rmit.edu.vn
                        </a>
                    </p>
                    <p className="mt-2 text-lg">
                        Follow us on Facebook:{" "}
                        <a
                            href="https://www.facebook.com/rmitshinsei/"
                            className="text-[#F2AF43] underline"
                        >
                            RMIT Shinsei Kendo Club
                        </a>
                    </p>
                </section>
            </div>
        </>
    );
};

export default RiktPage;
