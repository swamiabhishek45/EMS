import React from "react";

const TaskListNumbers = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-5 justify-between w-full">
            <div className="flex items-center justify-center flex-col bg-blue-400 py-5 px-10  rounded-md">
                <h1 className="text-4xl font-bold text-center">0</h1>
                <p className="font-bold text-lg text-center text-">New Task</p>
            </div>
            <div className="flex items-center justify-center flex-col bg-emerald-400 py-5 px-10  rounded-md">
                <h1 className="text-4xl font-bold text-center">0</h1>
                <p className="font-bold text-lg text-center">Completed</p>
            </div>
            <div className="flex items-center justify-center flex-col bg-yellow-400 py-5 px-10  rounded-md">
                <h1 className="text-4xl font-bold text-center">0</h1>
                <p className="font-bold text-lg text-center">Accepted</p>
            </div>
            <div className="flex items-center justify-center flex-col bg-red-400 py-5 px-10  rounded-md">
                <h1 className="text-4xl font-bold text-center">0</h1>
                <p className="font-bold text-lg text-center">Failed</p>
            </div>
        </div>
    );
};

export default TaskListNumbers;
