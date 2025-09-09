// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "./../../assets/profile-img.png";
import "./HomePage.css";

export default function HomePage() {
    const navigate = useNavigate();
    // const [dateRange, setDateRange] = useState("Last 12 months");

    const toggleButtons = [
        { name: "Dashboard", path: "/home/dashboard" },
        { name: "Getting Started", path: "/home/getting-started" },
        { name: "Recent Updates", path: "/home/recent-updates" },
    ];

    // const dateOptions = [
    //     "This Week",
    //     "Previous Week",
    //     "Last 30 days",
    //     "This Month",
    //     "Previous Month",
    //     "Last 3 months",
    //     "Last 12 months",
    //     "This Quarter",
    //     "Previous Quarter",
    //     "This Year",
    //     "Previous Year",
    //     "Year To Date",
    // ];

    const handleToggleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page-container">
            {/* Header Section */}
            <div className="home-page-header">
                <img src={profileImg} alt="User" className="home-page-user-image" />
                <div>
                    <h2 className="home-page-username">Hello, Abhishek</h2>
                    <p className="home-page-org-name">OrgName</p>
                </div>
            </div>

            {/* Toggle Buttons */}
            <div className="home-page-toggle-buttons">
                {toggleButtons.map((btn, index) => (
                    <div
                        key={index}
                        className="home-page-toggle-btn"
                        onClick={() => handleToggleClick(btn.path)}
                    >
                        {btn.name}
                    </div>
                ))}
            </div>

            {/* Dropdown */}
            {/* <div className="home-page-main">
                <label htmlFor="dateRange" className="home-page-dropdown-label">
                    Date Range
                </label>
                <select
                    id="dateRange"
                    className="home-page-dropdown"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                >
                    {dateOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div> */}
        </div>
    );
}
