import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import profileImg from "./../../assets/profile-img.png"
import {
    Clock, Search, ChevronDown, Plus, Users, Bell, Settings
} from "lucide-react";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [trialDays, setTrialDays] = useState(14);

    // Trial expiration counter
    useEffect(() => {
        const interval = setInterval(() => {
            setTrialDays((prev) => (prev > 0 ? prev - 1 : 0));
        }, 24 * 60 * 60 * 1000); // daily decrease
        return () => clearInterval(interval);
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <>
            {/* Background Hider */}
            {activeDropdown && (
                <div
                    className="navbar-background-hider"
                    onClick={() => setActiveDropdown(null)}
                />
            )}

            <div className="navbar-container">
                {/* LEFT NAV */}
                <div className="navbar-left">
                    {/* 1. Recent Activities */}
                    <div
                        className="navbar-icon"
                        onClick={() => toggleDropdown("recent")}
                        title="Recent Activities"
                    >
                        <Clock size={20} />
                    </div>

                    {/* 2. Search Bar */}
                    <div className="navbar-search-bar">
                        <div className="navbar-search-icon">
                            <Search size={18} />
                            <ChevronDown size={14} />
                        </div>
                        <div className="navbar-search-input">
                            <input type="text" placeholder="Search the query" />
                        </div>
                    </div>

                    {/* 3. Trial Expire */}
                    <div className="navbar-trial" title={`Free Trial expires in ${trialDays} days`}>
                        Trial expires in {trialDays} days
                    </div>

                    {/* 4. Subscription */}
                    <Link to="/subscription" title="View Subscription" className="navbar-link">
                        Subscribe
                    </Link>
                </div>

                {/* RIGHT NAV */}
                <div className="navbar-right">
                    {/* 5. Organization Name */}
                    <div
                        className="navbar-org"
                        onClick={() => toggleDropdown("organization")}
                        title="OrganizationName"
                    >
                        OrgName <ChevronDown size={14} />
                    </div>

                    {/* 6. Quick Create */}
                    <div
                        className="navbar-icon green"
                        onClick={() => toggleDropdown("quickCreate")}
                        title="Quick Create"
                    >
                        <Plus size={20} />
                    </div>

                    {/* 7. Refer & Earn */}
                    <div
                        className="navbar-icon"
                        onClick={() => toggleDropdown("refer")}
                        title="Refer and Earn"
                    >
                        <Users size={20} />
                    </div>

                    {/* 8. Notifications */}
                    <div
                        className="navbar-icon"
                        onClick={() => toggleDropdown("notifications")}
                        title="Notifications"
                    >
                        <Bell size={20} />
                    </div>

                    {/* 9. Settings */}
                    <Link to="/settings" className="navbar-icon" title="Settings">
                        <Settings size={20} />
                    </Link>

                    {/* 10. Profile */}
                    <div
                        className="navbar-profile"
                        onClick={() => toggleDropdown("profile")}
                        title="My Account"
                    >
                        <img src={profileImg} alt="Profile" />
                    </div>
                </div>
            </div>

            {/* DROPDOWNS */}
            {activeDropdown && (
                <div className="navbar-dropdown">
                    <button
                        className="navbar-close"
                        onClick={() => setActiveDropdown(null)}
                    >
                        ✕
                    </button>
                    <h3>{activeDropdown} Dropdown</h3>
                    {/* You can fill with respective content */}
                </div>
            )}
        </>
    );
};

export default Navbar;
