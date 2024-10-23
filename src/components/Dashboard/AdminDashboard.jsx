import React from "react";
import Header from "../Header";
import CreateTask from "../CreateTask";

const AdminDashboard = () => {
    return (
        <div className="p-10 h-screen w-full">
            <Header />
            <CreateTask />
        </div>
    );
};

export default AdminDashboard;
