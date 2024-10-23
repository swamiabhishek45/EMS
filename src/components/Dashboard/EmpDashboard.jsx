import React from "react";
import Header from "../Header";
import TaskListNumbers from "../TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmpDashboard = () => {
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    );
};

export default EmpDashboard;
