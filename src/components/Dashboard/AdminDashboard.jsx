import React from "react";
import Header from "../Header";
import CreateTask from "../CreateTask";
import AllTask from "../AllTask";

const AdminDashboard = () => {
    return (
        <div className="p-10 h-screen w-full">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
