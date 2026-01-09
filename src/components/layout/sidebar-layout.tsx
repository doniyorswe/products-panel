import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

export default function SidebarLayout() {

    return (
        <main className="h-screen flex items-start">
            <Sidebar />
            <div className="flex-1 max-h-screen overflow-y-auto">
                <Header />
                <div className="p-3">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}
