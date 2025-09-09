import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Home,
    Users,
    Package,
    ShoppingCart,
    CreditCard,
    Wallet,
    Clock,
    Calendar,
    FileText,
    ChevronDown,
    ChevronRight,
    Menu,
    Sparkles,
} from "lucide-react";
import "./Sidebar.css";
import logo from "../../assets/logo-img.png"; // make sure path is correct

const sidebarItems = [
    {
        name: "Getting Started",
        icon: <Sparkles size={18} />,
        path: "/getting-started",
        progress: 60,
    },
    { name: "Home", icon: <Home size={18} />, path: "/home" },
    { name: "Customers", icon: <Users size={18} />, path: "/customers" },
    {
        name: "Product Catalog",
        icon: <Package size={18} />,
        subItems: [
            { name: "Items", path: "/product-catalog/items" },
            { name: "Subscription Items", path: "/product-catalog/subscription-items" },
            { name: "Pricing Widgets", path: "/product-catalog/pricing-widgets" },
        ],
    },
    {
        name: "Sales",
        icon: <ShoppingCart size={18} />,
        subItems: [
            { name: "Invoices", path: "/sales/invoices" },
            { name: "Subscriptions", path: "/sales/subscriptions" },
            { name: "Delivery Challans", path: "/sales/delivery-challans" },
            { name: "Credit Notes", path: "/sales/credit-notes" },
        ],
    },
    {
        name: "Payments",
        icon: <CreditCard size={18} />,
        subItems:[
            {name: "Payments Received",path: "/payments/payments-received" },
        ]
    },
    {
        name: "Expenses",
        icon: <Wallet size={18} />,
        subItems:[
            {name: "Expenses",path: "/expenses"},
            {name: "Recurring Expenses",path: "/recurring-expenses"},
        ]
    },
    { name: "Time Tracking", icon: <Clock size={18} />, 
        subItems:[
            {name:"Project",path: "/time-tracking" },
            {name:"Timesheet",path: "/time-tracking" },
        ]
    },
    { name: "Events", icon: <Calendar size={18} />, path: "/events" },
    { name: "Reports", icon: <FileText size={18} />, path: "/reports" },
];

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({});
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const toggleMenu = (name) => {
        setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`sidebar-container ${collapsed ? "sidebar-collapsed" : ""}`}>
            {/* Logo Section */}
            <div className="sidebar-logo">
                <img src={logo} alt="logo" className="sidebar-logo-img" />
                {!collapsed && <span className="sidebar-logo-title">PAYNEX</span>}
            </div>

            <div className="sidebar-menu-container">
                {/* Menu */}
                <div className="sidebar-menu">
                    {sidebarItems.map((item, index) => (
                        <div key={index}>
                            {/* Getting Started with progress */}
                            {item.progress !== undefined ? (
                                <Link
                                    to={item.path}
                                    className={`sidebar-link ${isActive(item.path) ? "sidebar-active" : ""}`}
                                >
                                    <span className="sidebar-icon">{item.icon}</span>
                                    
                                        <div className="sidebar-getting-started">
                                            <span className="sidebar-text">{item.name}</span>
                                            <div className="sidebar-progress-bar">
                                                <div
                                                    className="sidebar-progress"
                                                    style={{ width: `${item.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    
                                </Link>
                            ) : item.subItems ? (
                                <div
                                    className={`sidebar-item ${openMenus[item.name] ? "sidebar-open" : ""}`}
                                >
                                    <div
                                        className={`sidebar-link sidebar-link-dropdown ${openMenus[item.name] ? "sidebar-active-border" : ""
                                            }`}
                                        onClick={() => toggleMenu(item.name)}
                                    >
                                        {/* Arrow on left side */}
                                        <span className="sidebar-arrow-left">
                                            {openMenus[item.name] ? (
                                                <ChevronDown size={14} />
                                            ) : (
                                                <ChevronRight size={14} />
                                            )}
                                        </span>
                                        <div className="sidebar-items">
                                            <span className="sidebar-icon">{item.icon}</span>
                                            <span className="sidebar-text">{item.name}</span>
                                        </div>
                                    </div>
                                    {openMenus[item.name] && (
                                        <div className={`sidebar-submenu ${collapsed ? "sidebar-submenu-collapsed" : ""}`}>
                                            {item.subItems.map((sub, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={sub.path}
                                                    className={`sidebar-sublink ${isActive(sub.path) ? "sidebar-active" : ""
                                                        }`}
                                                >
                                                    <span>{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`sidebar-link ${isActive(item.path) ? "sidebar-active" : ""}`}
                                >
                                    <span className="sidebar-icon">{item.icon}</span>
                                    <span className="sidebar-text">{item.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Toggle */}
                <div className="sidebar-footer">
                    <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
                        <Menu size={20} />
                    </button>
                </div>
        </div>
    );
};

export default Sidebar;
