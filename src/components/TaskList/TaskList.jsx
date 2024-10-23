import React from "react";

const TaskList = () => {
    return (
        <div
            id="tasklist"
            className="h-[55%] mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
        >
            <div className="bg-emerald-400 h-full w-[350px] flex-shrink-0 rounded-md">
                <div className="p-2 flex justify-between">
                    <h3 className="bg-red-500 w-fit p-1 font-bold rounded-md text-sm px-2">
                        High
                    </h3>
                    <h2 className=" font-bold">30 sep 2024</h2>
                </div>
                <div className="mt-5 p-2">
                    <h2 className="font-bold text-2xl ">Make a youtube video</h2>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit a doloremque, dicta omnis eaque ut!
                    </p>
                </div>
            </div>
        </div>
    );
};
 
export default TaskList;
