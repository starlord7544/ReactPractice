import "./layout.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryFilters from "./components/Categories/CategoryFilters";

function Layout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="Layout">
            <div className="mainarea">
                <Header />
                <CategoryFilters openSidebar={() => setSidebarOpen(true)} />
                {children}
            </div>
            <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
    );
}
export default Layout;